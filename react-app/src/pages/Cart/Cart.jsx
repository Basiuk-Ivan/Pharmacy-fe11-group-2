import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, Typography, Button, TextField, InputAdornment, IconButton } from '@mui/material';
import {
  Box,
  Container
  // fontSize,
} from '@mui/system';

// import { removeItem } from '../../redux/cartSlice';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import styled from 'styled-components';
import IconBreadcrumbs from './Breadcrums';
import './CartStyles.scss';

const StyledBox = styled(Box)`
  width: 258px;
  height: 132px;
  background: #2fd3ae;
`;

const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ContentBox = styled(Box)`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
  line-height: 26px;
`;

const PriceBox = styled(Box)`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`;

const ButtonDecrement = styled(Button)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(221, 136, 136, 1);
  .MuiButtonBase-root {
    min-width: 10px;
  }
`;

const ButtonIncrement = styled(Button)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(47, 211, 174, 1);
  .MuiButtonBase-root {
    min-width: 10px;
  }
`;

const FormBox = styled(Box)`
  width: 358px;
  height: 456px;
  margin-top: -40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(231, 233, 235, 1);
`;

const FormTitle = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
  width: 100%;
  height: 78px;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: flex-start;
`;
const FormTitlePromo = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
  width: 100%;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const FormText = styled(Typography)`
  font-size: 18px;
  font-weight: 400;
  padding: 20px;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OrderButton = styled(Button)`
  width: 318px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(231, 233, 235, 1);
  border-radius: 26px;
  padding: 10px;
  color: white;
  background: #2fd3ae;
`;
const SaleBox = styled(Box)`
  width: 100%;
  height: 78px;
  display: flex;
  justify-content: space-between;
  background: rgba(247, 250, 251, 1);
`;
const TotalBox = styled(Box)`
  width: 100%;
  height: 78px;
  display: flex;
  justify-content: space-between;
`;
const PromoBox = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 20px 0 20px;
  flex-direction: column;
  background: rgba(247, 250, 251, 1);
  .MuiOutlinedInput-root {
    border-radius: 26px;
  }
`;
const HeaderBox = styled(Box)`
  width: 805px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextFieldPromo = styled(TextField)`
  width: 100%;
  border-radius: 50px;
`;

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
                  <ButtonDecrement onClick={handleDecrement}>-</ButtonDecrement>
                  {count}
                  <ButtonIncrement onClick={handleIncrement}>+</ButtonIncrement>
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
                <Box display="flex" justifyContent="center" alignItems="center">
                  <ButtonDecrement onClick={handleDecrement}>-</ButtonDecrement>
                  {count}
                  <ButtonIncrement onClick={handleIncrement}>+</ButtonIncrement>
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
                <Box display="flex" justifyContent="center" alignItems="center">
                  <ButtonDecrement onClick={handleDecrement}>-</ButtonDecrement>
                  {count}
                  <ButtonIncrement onClick={handleIncrement}>+</ButtonIncrement>
                </Box>
              </PriceBox>
            </CardContentStyled>
          </Card>
        </Container>
      </Container>
    </div>
  );
};

export default Cart;
