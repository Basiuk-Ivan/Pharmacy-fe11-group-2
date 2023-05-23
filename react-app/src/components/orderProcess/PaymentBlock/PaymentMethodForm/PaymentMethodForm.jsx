import {
  Box, FormControl, FormControlLabel, RadioGroup, Typography, Radio
} from '@mui/material';

const PaymentMethodForm = () => (
  <>
    <Typography variant="h5">Спосіб Оплати</Typography>
    <FormControl>
      <RadioGroup aria-labelledby="radio-buttons-group-label" defaultValue="cash" name="radio-buttons-group">
        <FormControlLabel
          value="cash"
          control={<Radio />}
          label="Наличными или банковской картой при получении"
        />
        <FormControlLabel
          value="card"
          control={<Radio />}
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

export default PaymentMethodForm;
