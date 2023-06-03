import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  Box
  // Container
} from '@mui/system';
import {
  // Card,
  Typography,
  InputAdornment,
  IconButton
} from '@mui/material';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
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
  TextFieldPromo
} from './style';

const Cart = () => {
  // const products = useSelector(state => state.itemCards.items);
  const isInCart = true;

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedItems);
  }, []);

  // const dispatch = useDispatch();

  // const handleRemoveItem = itemId => {
  //   dispatch(removeItem(itemId));
  // };

  // const [count, setCount] = useState(0);

  // const handleIncrement = () => {
  //   setCount(prevCount => prevCount + 1);
  // };

  // const handleDecrement = () => {
  //   if (count > 0) {
  //     setCount(prevCount => prevCount - 1);
  //   }
  // };

  return (
    <div>
      <IconBreadcrumbs />
      <HeaderBox>
        <Typography variant="h4" gutterBottom>
          Корзина
        </Typography>
        <IconButton>
          <DeleteOutlineTwoToneIcon sx={{ fill: 'rgba(130, 130, 130, 1)' }} />
          <Typography>Очистити корзину</Typography>
        </IconButton>
      </HeaderBox>
      <Box
        sx={{
          width: 1200,
          display: 'flex',
          gap: '20px',
          flexDirection: 'row-reverse',
          fontFamily: 'Roboto'
        }}
      >
        <Box>
          <FormBox>
            <FormTitle>Ваше Замовлення</FormTitle>
            <SaleBox>
              <FormText>Знижка </FormText>
              <FormText>- 48грн</FormText>
            </SaleBox>
            <TotalBox>
              <FormText>Разом без доставки</FormText>
              <FormText> - 48грн</FormText>
            </TotalBox>
            <NavLink to="/orderprocess">
              <OrderButton>Оформити замовлення</OrderButton>
            </NavLink>

            <PromoBox mt={2}>
              <FormTitlePromo>Промокод</FormTitlePromo>
              <TextFieldPromo
                id="promo-code"
                label="Введіть промокод"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <ExpandCircleDownIcon sx={{ fill: 'rgba(47, 211, 174, 1)', rotate: '-90deg' }} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </PromoBox>
          </FormBox>
        </Box>
        <Box
          sx={{
            width: 830,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            fontFamily: 'Roboto'
          }}
        >
          {/* <Card style={{ marginBottom: '1rem' }}> */}
          {/* <CardContentStyled> */}
          {cartItems.map(item => (
            <ProductCard key={item.id} productItem={item} isInCart={isInCart} />
          ))}
          {/* </CardContentStyled> */}
          {/* </Card> */}
        </Box>
      </Box>
    </div>
  );
};

export default Cart;
