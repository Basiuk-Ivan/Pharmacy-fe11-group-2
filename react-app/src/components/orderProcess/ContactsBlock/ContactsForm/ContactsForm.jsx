import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Grid, Typography, Container } from '@mui/material';
import { styled, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { request } from '../../../../tools/request';
import { theme as muiTheme } from '../../../../tools/muiTheme';

import { openOrderModal } from '../../../../redux/slice/cartItems';

const ChangedTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-root': {
    borderRadius: 30
  }
}));

const nameRegExp = /[a-zA-zа-яА-яёЁ]$/;

const ContactsForm = ({ products }) => {
  const orderPaymentMethod = useSelector(state => state.order.PaymentMethodValue);
  const sumWithDiscount = useSelector(state => state.itemCards.sumWithDiscount);

  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("Введіть своє ім'я кирилицею")
      .matches(nameRegExp, "Введіть своє ім'я кирилицею")
      .min(2, 'Мінімум два символи'),
    email: Yup.string().email('Введіть свою ел. пошту').required('Введіть свою ел. пошту'),
    city: Yup.string().required('Введіть своє місто').matches(nameRegExp, 'Введіть своє місто'),
    house: Yup.string().required('Введіть номер будинку'),
    lastName: Yup.string()
      .required('Введіть своє прізвище кирилицею')
      .matches(nameRegExp, 'Введіть своє прізвище кирилицею')
      .min(2, 'Мінімум два символи'),
    phone: Yup.number()
      .required('Введіть номер мобільного телефону')
      .typeError('Введіть номер мобільного телефону'),
    street: Yup.string().required('Введіть назву вулиці'),
    apartment: Yup.number().typeError('Введіть номер квартири')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      city: '',
      house: '',
      lastName: '',
      phone: '',
      street: '',
      apartment: '',
      paymentMethod: `${orderPaymentMethod}`,
      products: [],
      totalPrice: Number
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const { status } = await request({
        url: '/order',
        method: 'POST',
        body: values
      });

      if (status === 200) {
        dispatch(openOrderModal());
        resetForm();
      }
    }
  });

  useEffect(() => {
    formik.setFieldValue('products', products);
  }, [products]);
  useEffect(() => {
    formik.setFieldValue('totalPrice', sumWithDiscount);
  }, [products]);

  useEffect(() => {
    formik.setFieldValue('paymentMethod', orderPaymentMethod);
  }, [orderPaymentMethod]);

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
        <form id="contacts" onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
            <Grid item md={6} xl={6}>
              <ChangedTextField
                label="Ваше ім'я"
                fullWidth
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
              <ChangedTextField
                label="Ваш e-mail"
                fullWidth
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={Boolean(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <ChangedTextField
                label="Місто"
                fullWidth
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                error={Boolean(formik.touched.city && formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
              <ChangedTextField
                label="Будинок"
                fullWidth
                name="house"
                value={formik.values.house}
                onChange={formik.handleChange}
                error={Boolean(formik.touched.house && formik.errors.house)}
                helperText={formik.touched.house && formik.errors.house}
              />
            </Grid>
            <Grid item md={6} xl={6}>
              <ChangedTextField
                label="Ваше прізвище"
                fullWidth
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
              <ChangedTextField
                label="Ваш телефон"
                fullWidth
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={Boolean(formik.touched.phone && formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
              <ChangedTextField
                label="Вулиця"
                fullWidth
                name="street"
                value={formik.values.street}
                onChange={formik.handleChange}
                error={Boolean(formik.touched.street && formik.errors.street)}
                helperText={formik.touched.street && formik.errors.street}
              />
              <ChangedTextField
                label="Квартира"
                fullWidth
                name="apartment"
                value={formik.values.apartment}
                onChange={formik.handleChange}
                error={Boolean(formik.touched.apartment && formik.errors.apartment)}
                helperText={formik.touched.apartment && formik.errors.apartment}
              />
            </Grid>
          </Grid>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default ContactsForm;
