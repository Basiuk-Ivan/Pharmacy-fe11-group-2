// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
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
import './Style/CartStyles.scss';
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
} from './Style';

import { removeFromCartLocalStor } from '../../utils/removeFromCartLocalStor';
// import { fetchProductsData } from '../../redux/slice/productsSlice';

const Cart = () => {
  const productItemCart = useSelector(state => state.itemCards.items);
  const isInCart = true;
  const generalPrice = productItemCart.reduce((acum, product) => acum + product.price, 0);
  const discount = productItemCart.reduce((acum, product) => acum + product.discount, 0);
  const totalValue = generalPrice - discount;
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchProductsData());
  // }, [dispatch, products.length]);
  const delFromCart = prods => {
    prods.forEach(el => {
      removeFromCartLocalStor(el, dispatch, 'all');
    });
    // dispatch(removeItem('all'));
  };

  return (
    <Box>
      <IconBreadcrumbs />
      <HeaderBox>
        <Typography variant="h4" gutterBottom>
          Корзина
        </Typography>
        <IconButton onClick={() => delFromCart(productItemCart)}>
          <DeleteOutlineTwoToneIcon />
          <Typography>Очистити корзину</Typography>
        </IconButton>
      </HeaderBox>
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
            {/* <PromoBox mt={2}> */}
            {/*  <FormTitlePromo>Промокод</FormTitlePromo> */}
            {/*  <TextFieldPromo */}
            {/*    id="promo-code" */}
            {/*    label="Введіть промокод" */}
            {/*    variant="outlined" */}
            {/*    InputProps={{ */}
            {/*      endAdornment: ( */}
            {/*        <InputAdornment position="end"> */}
            {/*          <IconButton> */}
            {/* eslint-disable-next-line max-len */}
            {/*            <ExpandCircleDownIcon sx={{ fill: 'rgba(47, 211, 174, 1)', rotate: '-90deg' }} /> */}
            {/*          </IconButton> */}
            {/*        </InputAdornment> */}
            {/*      ) */}
            {/*    }} */}
            {/*  /> */}
            {/* </PromoBox> */}
          </FormBox>
        </Box>
        <CardBox>
          {productItemCart.map(item => (
            <ProductCard key={item.id} productItem={item} isInCart={isInCart} />
          ))}
        </CardBox>
      </ContainerBox>
    </Box>
  );
};

export default Cart;
