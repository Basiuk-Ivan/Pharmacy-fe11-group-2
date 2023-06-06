import { Box, Button, Rating, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Review from '../Review/index';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Действия при отправке формы
  };

  const formik = useFormik({
    initialValues: {
      name,
      email,
      review
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'The name must contain at least 2 characters')
        .max(50, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Невірний формат електронної пошти')
        .required('Required'),
      review: Yup.string()
        .min(10, 'Відгук повинен мати мінімум 10 символів')
        .max(500, 'Відгук не повинен перевищувати 500 символів')
        .required('Required')
    }),

  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" useFlexGap flexWrap="wrap" justifyContent="space-between" spacing={3}>
        <TextField
          id="name"
          name="name"
          label="Ваше ім'я"
          value={formik.values.name}
          onChange={event => setName(event.target.value)}
          fullWidth
          margin="normal"
          sx={{
            width: '47%',
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
            },
          }}
        />
        <TextField
          id="email"
          name="email"
          label="Ваш email"
          value={formik.values.email}
          onChange={event => setEmail(event.target.value)}
          fullWidth
          margin="normal"
          sx={{
            width: '47%',
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
            },
          }}
        />

        <TextField
          label="Відгук"
          value={review}
          onChange={event => setReview(event.target.value)}
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
  );
};

const ProductCardReviews = () => {
  const [value, setValue] = useState(2);

  return (
    <Box>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        sx={{ mt: '68px', mb: '30px', fontSize: '36px', lineHeight: '42px', fontWeight: '700' }}
      >
        Відгуки
      </Typography>

      <Box
        component="form"
        sx={{
          borderRadius: '20px',
          backgroundColor: '#F7FAFB',
          padding: '30px'
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          variant="h5"
          component="h5"
          gutterBottom
          sx={{ mb: '30px', fontSize: '18px', lineHeight: '18px', fontWeight: '500' }}
        >
          Залишити відгук
        </Typography>
        <Stack>
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
          <Form />
        </Stack>
        <Review />

      </Box>
    </Box>
  );
};
export default ProductCardReviews;
