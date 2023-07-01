import { Button, Rating, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProductReviewToDB } from '../../../utils/ActionsWithProduct/addProductReviewToDB';
import { changeStateReview } from '../../../redux/slice/userSlice';
import {updateRating} from "../../../utils/ActionsWithProduct/updateRating.js";

const ReviewForm = ({product}) => {
  const { id } = useParams();
  const userId = useSelector(state => state.user.id);
  const dispatch = useDispatch();

  const [ratingError, setRatingError] = useState(false);
  const [valueRating, setValueRating] = useState(0);
  const surname = useSelector(state => state.user.secondName);
  const name = useSelector(state => state.user.firstName);
  const gender = useSelector(state => state.user.gender);

  useEffect(() => {
    setRatingError(false);
  }, [valueRating]);

  const formik = useFormik({
    initialValues: {
      name,
      surname,
      review: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Ім\'я має містити не менше 2 символів')
        .max(20, 'Має бути 20 символів або менше')
        .required('Обов\'язкове поле'),
      surname: Yup.string()
        .min(2, 'Прізвище має містити не менше 2 символів')
        .max(20, 'Має бути 20 символів або менше')
        .required('Обов\'язкове поле'),
      review: Yup.string()
        .min(10, 'Відгук повинен мати мінімум 10 символів')
        .max(500, 'Відгук не повинен перевищувати 500 символів')
        .required('Обов\'язкове поле')
    }),
    onSubmit: async (values, { resetForm }) => {
      if (valueRating > 0) {
        const finishedReview = {
          rating: valueRating,
          name: values.name,
          surname: values.surname,
          reviewTxt: values.review
        };
        await addProductReviewToDB(finishedReview, id, userId, gender);
        await updateRating(product, valueRating);
        setValueRating(0);
        dispatch(changeStateReview(values.review));
        resetForm();
      } else {
        setRatingError(true);
      }
    }
  });

  return (
    <Stack>

      <form onSubmit={formik.handleSubmit}>
        <Typography
          variant="p"
          component="p"
          gutterBottom
          sx={{ fontSize: '14px', lineHeight: '16px', fontWeight: '500' }}
        >
          Оцінка
        </Typography>
        <Rating
          name="simple-controlled"
          value={valueRating}
          onChange={(event, newValue) => {
            setValueRating(newValue);
          }}
          sx={{ fontSize: '25px' }}
        />
        {ratingError &&
        <Typography
          variant="p"
          component="p"
          sx={{ fontSize: '12px', color: 'red' }}
        >
          Встановіть оцінку
        </Typography>}
        <Stack direction="row" useFlexGap flexWrap="wrap" justifyContent="space-between" spacing={3}>

          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={0.5}
            sx={{ flexGrow: '1' }}
          >
            <TextField
              id="name"
              name="name"
              label="Ваше ім'я"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              margin="normal"
              disabled
              sx={{
                flex: '1',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                },
              }}
            />
            {formik.touched.name && formik.errors.name
              ? (
                <Typography
                  variant="p"
                  component="p"
                  sx={{ fontSize: '12px', color: 'red' }}
                >
                  {formik.errors.name}
                </Typography>
              ) : null}
          </Stack>

          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={0.5}
            sx={{ flexGrow: '1' }}
          >
            <TextField
              id="surname"
              name="surname"
              label="Ваше прізвище"
              value={formik.values.surname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              margin="normal"
              disabled
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                },
              }}
            />
            {formik.touched.surname && formik.errors.surname
              ? (
                <Typography
                  variant="p"
                  component="p"
                  sx={{ fontSize: '12px', color: 'red' }}
                >
                  {formik.errors.surname}
                </Typography>
              ) : null}
          </Stack>

          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={0.5}
            sx={{ width: '100%' }}
          >
            <TextField
              id="review"
              name="review"
              label="Відгук"
              value={formik.values.review}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                },
              }}
            />
            {formik.touched.review && formik.errors.review
              ? (
                <Typography
                  variant="p"
                  component="p"
                  sx={{ fontSize: '12px', color: 'red' }}
                >
                  {formik.errors.review}
                </Typography>
              ) : null}
          </Stack>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              padding: '18px 61px',
              fontSize: '12px',
              color: '#ffffff',
              fontWeight: '700',
              borderRadius: '50px'
            }}
          >
            Відправити
          </Button>
        </Stack>

      </form>
    </Stack>
  );
};
export default ReviewForm;
