import { Box, FormControl, FormControlLabel, RadioGroup, Typography, Radio, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { useDispatch, useSelector } from 'react-redux';
import { addPaymentMethod } from '../../../../redux/slice/orderProcessSlice';
import CardPaymentData from '../../CardPaymentData';
import { theme } from '../../../../tools/muiTheme';
import card from '../../../../assets/orderprocess/cards.png';

const PaymentMethodForm = () => {
  const dispatch = useDispatch();
  const paymentValue = useSelector(state => state.order.PaymentMethodValue);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography
          sx={{
            margin: '41px 10px 19px 0px',
            fontFamily: 'Raleway, sans-serif',
            color: '#4F4F4F',
            fontWeight: '700',
            fontSize: '24px'
          }}
        >
          Спосіб Оплати
        </Typography>
        <FormControl>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            defaultValue="cash"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="cash"
              control={<Radio />}
              label="Готівкою або карткою при отриманні"
              onChange={() => {
                dispatch(addPaymentMethod('cash'));
              }}
            />
            <FormControlLabel
              value="card"
              control={<Radio />}
              onChange={() => {
                dispatch(addPaymentMethod('card'));
              }}
              label={
                <Box display="flex" alignItems="center">
                  <span>Карткою онлайн</span>
                  <img src={card} alt="Payment Method" style={{ marginLeft: '10px' }} />
                </Box>
              }
            />
          </RadioGroup>
          {paymentValue === 'card' && <CardPaymentData />}
        </FormControl>
      </Container>
    </ThemeProvider>
  );
};

export default PaymentMethodForm;
