import { Button, Rating, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ReviewForm = () => {
  const [value, setValue] = useState(5);
  const name = '';
  const email = '';
  const review = '';

  const formik = useFormik({
    initialValues: {
      name,
      email,
      review
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Назва має містити не менше 2 символів')
        .max(20, 'Має бути 20 символів або менше')
        .required('Обов\'язкове поле'),
      email: Yup.string()
        .email('Невірний формат електронної пошти')
        .required('Обов\'язкове поле'),
      review: Yup.string()
        .min(10, 'Відгук повинен мати мінімум 10 символів')
        .max(500, 'Відгук не повинен перевищувати 500 символів')
        .required('Обов\'язкове поле')
    }),
    onSubmit: (values, { resetForm }) => {
      const finishedReview = {
        rating: value,
        name: values.name,
        email: values.email,
        review: values.review
      };

      console.table(finishedReview);
      resetForm();
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
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ fontSize: '25px' }}
        />
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
              id="email"
              name="email"
              label="Ваш email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                },
              }}
            />
            {formik.touched.email && formik.errors.email
              ? (
                <Typography
                  variant="p"
                  component="p"
                  sx={{ fontSize: '12px', color: 'red' }}
                >
                  {formik.errors.email}
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
