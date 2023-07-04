import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Grid, Typography, Container, Stack, Skeleton } from '@mui/material';
import { styled, ThemeProvider } from '@mui/material/styles';
import { ErrorMessage, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { request } from '../../../../tools/request';
import { theme as muiTheme } from '../../../../tools/muiTheme';
import {
  closeModalNotAvailable,
  openModalNotAvailable,
  openOrderModal,
  setSum
} from '../../../../redux/slice/cartItems';
import { putProductsToCartDB } from '../../../../utils/ActionsWithProduct/putProductsToCartDB';
import { addContactsInfo } from '../../../../redux/slice/orderProcessSlice';
import { updateQuantity } from '../../../../utils/ActionsWithProduct/updateQuantity';
import { sendRequest } from '../../../../tools/sendRequest';
import { countSum } from '../../../../utils/ActionsWithProduct/countSum';
import { openModalAddtoCart } from '../../../../redux/slice/favouriteItems';
import ModalWindow from '../../../ModalWindow';

const ChangedTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-root': {
    borderRadius: 30
  }
}));

const nameRegExp = /[a-zA-zа-яА-яёЁ]$/;

const ContactsForm = () => {
  const isOpenedCartModalNotAvailable = useSelector(state => state.itemCards.isOpenedCartModalNotAvailable);
  const orderPaymentMethod = useSelector(state => state.order.PaymentMethodValue);
  const sumWithDiscount = useSelector(state => state.itemCards.sumWithDiscount);
  const cartStoreId = useSelector(state => state.user.cartStoreId);
  const userId = useSelector(state => state.user.id);
  const surname = useSelector(state => state.user.secondName);
  const name = useSelector(state => state.user.firstName);
  const email = useSelector(state => state.user.email);
  const phoneNumber = useSelector(state => state.user.phoneNumber);
  const city = useSelector(state => state.validationOrder.city);
  console.log('cityState:', city);

  const [products, setProducts] = useState([]);
  const productItemCart = useSelector(state => state.itemCards.items);
  const dispatch = useDispatch();
  const [showSkeleton, setShowSkeleton] = useState(true);

  const handleCloseModalNotAvailable = () => {
    dispatch(closeModalNotAvailable());
  };

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
    city: Yup.string().required('Оберіть місто').nullable(),
    address: Yup.string().required('Оберіть адресу').nullable()
  });

  const formik = useFormik({
    initialValues: {
      firstName: name,
      email,
      lastName: surname,
      phone: phoneNumber,
      paymentMethod: `${orderPaymentMethod}`,
      products: [],
      totalPrice: Number,
      // city: '',
      city,
      address: ''
    },
    validationSchema,

    // onSubmit: async (values, { resetForm }) => {
    //   const data = { ...values, ...(userId && { user: userId }) };

    //   // const orderUrl = `${process.env.VITE_API_URL}/api/order`;

    //   // const cartResponse = await sendRequest(orderUrl, 'POST', data);

    //   const { status } = await request({
    //     url: '/order',
    //     method: 'POST',
    //     body: data
    //   });

    //   const updateProductQuantities = async productArr => {
    //     productArr.forEach(productItem => {
    //       updateQuantity(productItem);
    //     });
    //   };

    //   await updateProductQuantities(values.products);

    //   // // values.products.forEach(productItem => {
    //   //   updateQuantity(productItem);
    //   // });

    //   if (status === 200) {
    //     const newProducts = [];
    //     await putProductsToCartDB(cartStoreId, newProducts);
    //     dispatch(addContactsInfo(values));
    //     dispatch(openOrderModal());
    //     resetForm();
    //   }
    // }

    onSubmit: async (values, { resetForm }) => {
      console.log(values.products);
      let cartItemsCheckQuantity;
      let dataProductsDB;
      const fetchProducts = async () => {
        try {
          if (values.products.length > 0) {
            const cartIds = values.products.map(item => item.id).join(',');

            const { result } = await request({
              url: '',
              method: 'GET',
              params: { _id: cartIds }
            });

            const { data } = result;
            dataProductsDB = data;

            cartItemsCheckQuantity = values.products.find(cartItem => {
              const someResult = data.find(cartItemDB => cartItemDB.quantity < cartItem.quantity);
              if (someResult) {
                return true;
              }
              return false;
            });
          }
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      await fetchProducts();

      if (cartItemsCheckQuantity) {
        dispatch(openModalNotAvailable());
        return;
      }

      const productData = { ...values, ...(userId && { user: userId }) };

      console.log('values:', values);
      const { status } = await request({
        url: '/order',
        method: 'POST',
        body: productData
      });

      const updateProductQuantities = async productArr => {
        productArr.forEach(productItem => {
          updateQuantity(productItem);
        });
      };

      await updateProductQuantities(values.products);

      if (status === 200) {
        if (cartStoreId) {
          const newProducts = [];
          await putProductsToCartDB(cartStoreId, newProducts);
        }
        dispatch(addContactsInfo(values));
        dispatch(openOrderModal());
        resetForm();
      }
    }
  });
  console.log('formik:', formik);

  useEffect(() => {
    formik.setValues({
      ...formik.values,
      city: city || ''
    });
  }, [city, formik.setValues]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (productItemCart.length > 0) {
          const cartIds = productItemCart.map(item => item.id).join(',');

          const { result } = await request({
            url: '',
            method: 'GET',
            params: { _id: cartIds }
          });

          const { data } = result;

          const combinedArray = productItemCart.map(item1 => {
            const arr2 = data.find(item2 => item2.id === item1.id);
            return { ...item1, ...arr2, quantity: item1.quantity, quantityStore: arr2.quantity };
          });

          setProducts(combinedArray);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [productItemCart]);

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
