import { Box, FormControl, FormControlLabel, RadioGroup, Typography, Radio, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addPaymentMethod } from '../../../../redux/slice/orderProcessSlice';
import CardPaymentData from '../../CardPaymentData';

const PaymentMethodForm = () => {
  const dispatch = useDispatch();
  const paymentValue = useSelector(state => state.order.PaymentMethodValue);

  return (
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
            label={(
              <Box display="flex" alignItems="center">
                <span>Карткою онлайн</span>
                <img src="./orderprocessTest/cards.png" alt="Payment Method" style={{ marginLeft: '10px' }} />
              </Box>
            )}
          />
        </RadioGroup>
        {paymentValue === 'card' && <CardPaymentData />}
      </FormControl>
    </Container>
  );
};

export default PaymentMethodForm;
