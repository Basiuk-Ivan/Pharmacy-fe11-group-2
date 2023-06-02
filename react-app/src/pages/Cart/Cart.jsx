import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Card, Typography, InputAdornment, IconButton } from '@mui/material';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconBreadcrumbs from './Breadcrums';
import ProductCard from '../../components/ProductCard';
import './CartStyles.scss';
import {
  StyledBox,
  CardContentStyled,
  ContentBox,
  PriceBox,
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
} from './Style';
// eslint-disable-next-line import/order
import { Box, Container } from '@mui/system';

const Cart = () => {
  // const cartItems = useSelector(state => state.cart.items);
  // const dispatch = useDispatch();

  // const handleRemoveItem = itemId => {
  //   dispatch(removeItem(itemId));
  // };

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

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
      <Container
        sx={{
          width: 1200,
          display: 'flex',
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
            <OrderButton>Оформити замовлення</OrderButton>

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
        <Container
          sx={{
            width: 830,
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Roboto'
          }}
        >
          {/* <ProductCard /> */}
          {/* <Card style={{ marginBottom: '1rem' }}>
            <CardContentStyled>
              <StyledBox />
              <ContentBox>
                <Typography variant="body2">Є в наявності</Typography>
                <Typography variant="h7" color="textSecondary">
                  Велсон таблетки покрыт. плен. об. 3 мг, 30 шт.
                </Typography>
                <Typography variant="body2">Бренд: Lirina</Typography>
                <Typography variant="body2">Количество в упаковке: 10 шт</Typography>
                <Typography variant="body2">Код товара: 153249</Typography>
              </ContentBox>
              <PriceBox>
                <Typography variant="h6" color="textSecondary">
                  41 108 грн.
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center" sx={{ minWidth: '10px' }}>
                  <RemoveCircleIcon onClick={handleDecrement} sx={{ fill: 'rgba(221, 136, 136, 1)' }} />
                  {count}
                  <AddCircleIcon onClick={handleIncrement} sx={{ fill: 'rgba(47, 211, 174, 1)' }} />
                </Box>
              </PriceBox>
            </CardContentStyled>
          </Card>
          <Card style={{ marginBottom: '1rem' }}>
            <CardContentStyled>
              <StyledBox />
              <ContentBox>
                <Typography variant="body2">Є в наявності</Typography>
                <Typography variant="h7" color="textSecondary">
                  Велсон таблетки покрыт. плен. об. 3 мг, 30 шт.
                </Typography>
                <Typography variant="body2">Бренд: Lirina</Typography>
                <Typography variant="body2">Количество в упаковке: 10 шт</Typography>
                <Typography variant="body2">Код товара: 153249</Typography>
              </ContentBox>
              <PriceBox>
                <Typography variant="h6" color="textSecondary">
                  41 108 грн.
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center" sx={{ minWidth: '10px' }}>
                  <RemoveCircleIcon onClick={handleDecrement} sx={{ fill: 'rgba(221, 136, 136, 1)' }} />
                  {count}
                  <AddCircleIcon onClick={handleIncrement} sx={{ fill: 'rgba(47, 211, 174, 1)' }} />
                </Box>
              </PriceBox>
            </CardContentStyled>
          </Card>
          <Card style={{ marginBottom: '1rem' }}>
            <CardContentStyled>
              <StyledBox />
              <ContentBox>
                <Typography variant="body2">Є в наявності</Typography>
                <Typography variant="h7" color="textSecondary">
                  Велсон таблетки покрыт. плен. об. 3 мг, 30 шт.
                </Typography>
                <Typography variant="body2">Бренд: Lirina</Typography>
                <Typography variant="body2">Количество в упаковке: 10 шт</Typography>
                <Typography variant="body2">Код товара: 153249</Typography>
              </ContentBox>
              <PriceBox>
                <Typography variant="h6" color="textSecondary">
                  41 108 грн.
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center" sx={{ minWidth: '10px' }}>
                  <RemoveCircleIcon onClick={handleDecrement} sx={{ fill: 'rgba(221, 136, 136, 1)' }} />
                  {count}
                  <AddCircleIcon onClick={handleIncrement} sx={{ fill: 'rgba(47, 211, 174, 1)' }} />
                </Box>
              </PriceBox>
            </CardContentStyled>
          </Card> */}
        </Container>
      </Container>
    </div>
  );
};

export default Cart;
