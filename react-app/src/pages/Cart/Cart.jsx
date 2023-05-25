import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, Typography, Button, TextField, InputAdornment } from '@mui/material';
import {
  Box,
  Container,
  // fontSize,
  Stack
} from '@mui/system';

// import { removeItem } from '../../redux/cartSlice';
import styled from 'styled-components';
import './CartStyles.scss';

const StyledBox = styled(Box)`
  width: 258px;
  height: 132px;
  background: #2fd3ae;
`;

const CardContentStyled = styled(CardContent)`
  display: flex;
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
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ButtonDecrement = styled(Button)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(221, 136, 136, 1);
`;

const ButtonIncrement = styled(Button)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(47, 211, 174, 1);
`;

const FormBox = styled(Box)`
  width: 358px;
  height: 456px;
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 73%;
  top: 20px;
  border: 1px solid rgba(231, 233, 235, 1);
`;

const FormTitle = styled(Typography)`
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
  width: 100%;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(247, 250, 251, 1);
`;

const StyledButton = styled(Button)`
  width: 160px;
  height: 50px;
  border-radius: 26px;
  background: #2fd3ae;
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
      <Container
        sx={{
          width: 1200,
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Roboto'
        }}
      >
        <Typography variant="h4" gutterBottom>
          Корзина
        </Typography>

        <Box sx={{ width: '100%' }}>
          <Stack spacing={2}>
            <FormBox>
              <FormTitle>Ваше Замовлення</FormTitle>
              <FormText>Знижка - 48грн</FormText>
              <FormText>Разом без доставки - 48грн</FormText>

              <StyledButton>Оформити замовлення</StyledButton>

              <Box mt={2}>
                <FormTitle>Промокод</FormTitle>
                <TextField
                  id="promo-code"
                  label="Введіть промокод"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button variant="contained" color="primary">
                          Використати
                        </Button>
                      </InputAdornment>
                    )
                  }}
                />
              </Box>
            </FormBox>
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
                    <Box mx={2}>{count}</Box>
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
                    <Box mx={2}>{count}</Box>
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
                    <Box mx={2}>{count}</Box>
                    <ButtonIncrement onClick={handleIncrement}>+</ButtonIncrement>
                  </Box>
                </PriceBox>
              </CardContentStyled>
            </Card>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default Cart;
