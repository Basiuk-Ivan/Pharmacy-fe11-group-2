import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DeliveryBlock from '../components/orderProcess/DeliveryBlock/DeliveryBlock';
import Bread from '../components/Bread';
import Advantages from '../components/orderProcess/Advantages';
import ContactsBlock from '../components/orderProcess/ContactsBlock/ContactsBlock';
import PaymentBlock from '../components/orderProcess/PaymentBlock/PaymentBlock';
import { request } from '../tools/request';
import { openModalNotAvailable, openOrderModal } from '../redux/slice/cartItems';
import { updateQuantity } from '../utils/ActionsWithProduct/updateQuantity';
import { putProductsToCartDB } from '../utils/ActionsWithProduct/putProductsToCartDB';
import { addContactsInfo } from '../redux/slice/orderProcessSlice';

const OrderProcess = () => {
  const [products, setProducts] = useState([]);

  const productItemCart = useSelector(state => state.itemCards.items);
  const orderPaymentMethod = useSelector(state => state.order.PaymentMethodValue);
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
    city: Yup.string().required('Оберіть місто').nullable(),
    address: Yup.string().required('Оберіть адресу').nullable(),
    cityNP: Yup.string().required('Оберіть місто').nullable(),
    departamentNP: Yup.string().required('Оберіть відділення').nullable()
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
      city: '',
      address: '',
      cityNP: '',
      departamentNP: ''
    },
    validationSchema,

    onSubmit: async (values, { resetForm }) => {
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
            return { ...item1, ...arr2, quantity: item1.quantity };
          });

          setProducts(combinedArray);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [productItemCart]);

  return (
    <Container
      sx={{
        mt: '140px'
      }}
    >
      <Bread />
      <Typography
        sx={{
          mb: '20px',
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 700,
          fontSize: '36px',
          color: '#2E3A59'
        }}
      >
        Оформити замовлення
      </Typography>
      <ContactsBlock products={products} formik={formik} />
      <DeliveryBlock formik={formik} />
      <PaymentBlock />
      <Advantages />
    </Container>
  );
};

export default OrderProcess;
