import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
import { Typography, IconButton } from '@mui/material';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import IconBreadcrumbs from './Breadcrums';
import ProductCard from '../../components/ProductCard';
import { removeItem } from '../../redux/slice/cartItems';
import { removeFromCartLocalStorage } from '../../utils/LocalStore/removeFromCartLocalStorage';
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
  CardBox,
  ContainerBox
} from './style';

import './style/CartStyles.scss';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const productItemCart = useSelector(state => state.itemCards.items);

  const isInCart = true;
  const generalPrice = products.reduce((acum, product) => acum + product.price, 0);
  const discount = products.reduce((acum, product) => acum + product.discount, 0);
  const totalValue = generalPrice - discount;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const cartString = localStorage.getItem('cartItems');

        if (cartString) {
          const cartItems = JSON.parse(cartString);

          if (cartItems.length > 0) {
            const cartIds = cartItems.map(item => item.id);
            const url = `http://localhost:3004/api/product/?_id=${cartIds}`;
            const response = await fetch(url);

            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            const { prods } = await response.json();
            setProducts(prods);
          }
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    // eslint-disable-next-line arrow-body-style
    const updatedProducts = products.filter(item => {
      return productItemCart.find(cartItem => cartItem.id === item.id);
    });

    setProducts(updatedProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productItemCart]);

  const delFromCart = prods => {
    prods.forEach(el => {
      removeFromCartLocalStorage(el, dispatch, 'all');
    });
    dispatch(removeItem('all'));
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
            { }
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
          <HeaderBox>
            <Typography variant="h4" gutterBottom>
              Корзина
            </Typography>
            <IconButton onClick={() => delFromCart(productItemCart)}>
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
