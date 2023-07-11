import { Box, Typography } from '@mui/material';
import paymentPoint from '../../../../../assets/howWeWork/payment-point.svg';
import { wrapperForItem, wrapperForImg } from '../../style';

export const OrderForm = () => (
  <Box sx={wrapperForItem}>
    <Box sx={wrapperForImg}>
      <img src={paymentPoint} alt="paymentPoint" />
    </Box>
    <Box>
      <Typography fontFamily="Roboto" sx={{ fontWeight: 700, fontSize: '15px' }}>
        Оформити замовлення
      </Typography>
      <Typography sx={{ color: '#828282', fontSize: '14px' }}>
        Слідуйте інструкціям з оформлення замовлення
      </Typography>
    </Box>
  </Box>
);
