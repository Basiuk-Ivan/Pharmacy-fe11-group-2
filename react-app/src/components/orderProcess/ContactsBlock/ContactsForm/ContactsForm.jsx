import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Grid, Typography, Container, Stack, Skeleton } from '@mui/material';
import { styled, ThemeProvider } from '@mui/material/styles';
import { theme as muiTheme } from '../../../../tools/muiTheme';
import { closeModalNotAvailable } from '../../../../redux/slice/cartItems';

import ModalWindow from '../../../ModalWindow';

const ChangedTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-root': {
    borderRadius: 30
  }
}));

const ContactsForm = ({ products, formik }) => {
  const isOpenedCartModalNotAvailable = useSelector(state => state.itemCards.isOpenedCartModalNotAvailable);
  const orderPaymentMethod = useSelector(state => state.order.PaymentMethodValue);
  const sumWithDiscount = useSelector(state => state.itemCards.sumWithDiscount);

  const dispatch = useDispatch();
  const [showSkeleton, setShowSkeleton] = useState(true);

  const handleCloseModalNotAvailable = () => {
    dispatch(closeModalNotAvailable());
  };

  useEffect(() => {
    formik.setFieldValue('products', products);
  }, [products]);

  useEffect(() => {
    formik.setFieldValue('totalPrice', sumWithDiscount);
  }, [products]);

  useEffect(() => {
    formik.setFieldValue('paymentMethod', orderPaymentMethod);
  }, [orderPaymentMethod]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      <Container>
        <Typography
          variant="h5"
          sx={{
            margin: '40px 0 30px 0',
            fontFamily: 'Raleway, sans-serif',
            color: '#4F4F4F',
            fontWeight: '700',
            fontSize: '24px'
          }}
        >
          Контактні дані
        </Typography>
        {showSkeleton ? (
          <Stack direction="column" spacing={2}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </Stack>
        ) : (
          <form id="contacts" onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
              <Grid item md={6} xl={6}>
                <ChangedTextField
                  label="Ваше ім'я"
                  fullWidth
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                />
                <ChangedTextField
                  label="Ваш e-mail"
                  fullWidth
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item md={6} xl={6}>
                <ChangedTextField
                  label="Ваше прізвище"
                  fullWidth
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
                <ChangedTextField
                  label="Ваш телефон"
                  fullWidth
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.phone && formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
            </Grid>
          </form>
        )}
        <ModalWindow
          mainText="В корзині є товари, наявність яких відсутня. Для подальшого оформлення видаліть відсутні товари з корзини."
          handleClick={() => {}}
          handleClose={handleCloseModalNotAvailable}
          isOpened={isOpenedCartModalNotAvailable}
          actions={false}
        />
      </Container>
    </ThemeProvider>
  );
};

export default ContactsForm;
