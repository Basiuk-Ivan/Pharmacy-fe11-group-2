import { Box, FormControl, FormControlLabel, RadioGroup, Typography, Radio, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addPaymentMethod } from '../../../../redux/orderProcessSlice';

const PaymentMethodForm = () => {
  const dispatch = useDispatch();

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
        { }
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
      </FormControl>
    </Container>
  );
};

export default PaymentMethodForm;
