// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  Box
  // Container
} from '@mui/system';
import {
  // Card,
  Typography,
  // InputAdornment,
  IconButton
  // Button
} from '@mui/material';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
// import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import IconBreadcrumbs from './Breadcrums';
import ProductCard from '../../components/ProductCard';
import './style/CartStyles.scss';
import {
  FormBox,
  FormTitle,
  FormTitlePromo,
  FormText,
  OrderButton,
  SaleBox,
  TotalBox,
  PromoBox,
  HeaderBox,
  // TextFieldPromo,
  CardBox,
  ContainerBox
} from './style';

import { removeFromCartLocalStorage } from '../../utils/LocalStore/removeFromCartLocalStorage';

// import { fetchProductsData } from '../../redux/slice/productsSlice';

const Cart = () => {
  const [products, setProducts] = useState([]);

  const cartItems = useSelector(state => state.itemCards.items);
  const isInCart = true;
  const generalPrice = products.reduce((acum, product) => acum + product.price, 0);
  const discount = products.reduce((acum, product) => acum + product.discount, 0);
  const totalValue = generalPrice - discount;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchProduct = async ({id}) => {
  //     try {
  //       const response = await fetch(`http://localhost:3004/api/product/${id}`);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const singleProduct = await response.json();
  //       setProducts(prev => [...prev, singleProduct]);
  //     } catch (error) {
  //       // eslint-disable-next-line no-console
  //       console.error('Error fetching product:', error);
  //     }
  //   };
  //
  //   cartItems.forEach((item) => fetchProduct(item))
  // }, [cartItems]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (cartItems) {
          const cartItemsId = cartItems.map(item => item.id);
          const url = `http://localhost:3004/api/product/?_id=${cartItemsId}`;
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const { prods } = await response.json();
          setProducts(prods);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [cartItems]);

  const delFromCart = prods => {
    prods.forEach(el => {
      removeFromCartLocalStorage(el, dispatch, 'all');
    });
    // dispatch(removeItem('all'));
  };

  return (
    <Box>
      <IconBreadcrumbs />

      <ContainerBox>
        <Box>
          <FormBox>
            <FormTitle>Ваше Замовлення</FormTitle>
            <SaleBox>
              <FormText>Знижка </FormText>
              <FormText>- {discount}грн</FormText>
            </SaleBox>
            <TotalBox>
              <FormText>Без урахуваня знижки</FormText>
              <FormText> {generalPrice}грн</FormText>
            </TotalBox>

            <PromoBox mt={2}>
              <FormTitlePromo>Загальна сума: {totalValue} грн</FormTitlePromo>
              <OrderButton>
                <NavLink to="/orderprocess">Оформити замовлення</NavLink>
              </OrderButton>
            </PromoBox>
          </FormBox>
        </Box>
        <CardBox>
          <HeaderBox>
            <Typography variant="h4" gutterBottom>
              Корзина
            </Typography>
            <IconButton onClick={() => delFromCart()}>
              <DeleteOutlineTwoToneIcon />
              <Typography>Очистити корзину</Typography>
            </IconButton>
          </HeaderBox>
          {!!products.length > 0 ? (
            <>
              {products.map(item => (
                <ProductCard key={item.id} productItem={item} isInCart={isInCart} />
              ))}
            </>
          ) : (
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: 24,
                fontWeight: 400,
                mt: '100px',
                mb: '200px'
              }}
            >
              Додайте товар в корзину для відображення на цій сторінці
            </Typography>
          )}
        </CardBox>
      </ContainerBox>
    </Box>
  );
};

export default Cart;
