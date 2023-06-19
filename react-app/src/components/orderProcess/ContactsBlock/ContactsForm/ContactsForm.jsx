import { useEffect } from 'react';
import { useSelector } from 'react-redux';
/* eslint-disable no-console */
import { TextField, Grid, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "../../../../tools/muiTheme";

const ChangedTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-root': {
    borderRadius: 30
  }
}));

const nameRegExp = /[a-zA-zа-яА-яёЁ]$/;

const ContactsForm = () => {
  const orderPaymentMethod = useSelector(state => state.order.PaymentMethodValue);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Введіть своє ім'я кирилицею")
      .matches(nameRegExp, "Введіть своє ім'я кирилицею")
      .min(2, 'Мінімум два символи'),
    email: Yup.string().email('Введіть свою ел. пошту').required('Введіть свою ел. пошту'),
    city: Yup.string().required('Введіть своє місто').matches(nameRegExp, 'Введіть своє місто'),
    house: Yup.string().required('Введіть номер будинку'),
    surname: Yup.string()
      .required('Введіть своє прізвище кирилицею')
      .matches(nameRegExp, 'Введіть своє прізвище кирилицею')
      .min(2, 'Мінімум два символи'),
    phone: Yup.number().required('Введіть номер мобільного телефону').typeError('Введіть номер мобільного телефону'),
    street: Yup.string().required('Введіть назву вулиці'),
    apartment: Yup.number().typeError('Введіть номер квартири')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      city: '',
      house: '',
      surname: '',
      phone: '',
      street: '',
      apartment: '',
      paymentMethod: `${orderPaymentMethod}`
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    }
  });

  useEffect(() => {
    formik.setFieldValue('paymentMethod', orderPaymentMethod);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderPaymentMethod]);

  return (
      <ThemeProvider theme={theme}>
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
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.name && formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
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
              name="surname"
              value={formik.values.surname}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.surname && formik.errors.surname)}
              helperText={formik.touched.surname && formik.errors.surname}
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
