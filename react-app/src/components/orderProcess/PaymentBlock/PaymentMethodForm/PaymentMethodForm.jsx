import {
  Box, FormControl, FormControlLabel, RadioGroup, Typography, Radio
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addPaymentMethod } from '../../../../redux/orderProcessSlice';

const PaymentMethodForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Typography variant="h5">Спосіб Оплати</Typography>
      <FormControl>
        <RadioGroup aria-labelledby="radio-buttons-group-label" defaultValue="cash" name="radio-buttons-group">
          <FormControlLabel
            value="cash"
            control={<Radio />}
            label="Наличными или банковской картой при получении"
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
                <span>Картой онлайн</span>
                <img src="./orderprocessTest/cards.png" alt="Payment Method" style={{ marginLeft: '10px' }} />
              </Box>
          )}
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default PaymentMethodForm;
