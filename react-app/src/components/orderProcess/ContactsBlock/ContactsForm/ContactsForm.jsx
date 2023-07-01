import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Grid, Typography, Container } from '@mui/material';
import { styled, ThemeProvider } from '@mui/material/styles';
import { ErrorMessage, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { request } from '../../../../tools/request';
import { theme as muiTheme } from '../../../../tools/muiTheme';
import { openOrderModal } from '../../../../redux/slice/cartItems';
import { putProductsToCartDB } from '../../../../utils/ActionsWithProduct/putProductsToCartDB';
import { addContactsInfo } from '../../../../redux/slice/orderProcessSlice';

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
  const cartStoreId = useSelector(state => state.user.cartStoreId);
  const userId = useSelector(state => state.user.id);
  const surname = useSelector(state => state.user.secondName);
  const name = useSelector(state => state.user.firstName);
  const email = useSelector(state => state.user.email);
  const phoneNumber = useSelector(state => state.user.phoneNumber);

  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("Введіть своє ім'я кирилицею")
      .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+$/, 'Введіть тільки букви')
      .min(2, 'Мінімум два символи'),
    email: Yup.string().email('Введіть свою ел. пошту').required('Введіть свою ел. пошту'),
    lastName: Yup.string()
      .required('Введіть своє прізвище кирилицею')
      .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ']+$/, 'Введіть тільки букви')
      .min(2, 'Мінімум два символи'),
    phone: Yup.number()
      .required('Введіть номер мобільного телефону')
      .typeError('Введіть номер мобільного телефону'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: name,
      email,
      lastName: surname,
      phone: phoneNumber,
      paymentMethod: `${orderPaymentMethod}`,
      products: [],
      totalPrice: Number
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const data = { ...values,
        ...(userId && { user: userId }) };
      const { status } = await request({
        url: '/order',
        method: 'POST',
        body: data
      });
      if (status === 200) {
        const newProducts = [];
        await putProductsToCartDB(cartStoreId, newProducts);
        dispatch(addContactsInfo(values));
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
      </Container>
    </ThemeProvider>
  );
};

export default ContactsForm;
