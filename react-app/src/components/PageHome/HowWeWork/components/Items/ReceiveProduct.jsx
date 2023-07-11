import { Box, Typography } from '@mui/material';
import shoppingBags from '../../../../../assets/howWeWork/shopping-bags.svg';
import { wrapperForItem, wrapperForImg } from '../../style';

export const ReceiveProduct = () => (
  <Box sx={wrapperForItem}>
    <Box sx={wrapperForImg}>
      <img src={shoppingBags} alt="shoppingBags" />
    </Box>
    <Box>
      <Typography fontFamily="Roboto" sx={{ fontWeight: 700, fontSize: '15px' }}>
        Отримайте товар
      </Typography>
      <Typography sx={{ color: '#828282', fontSize: '14px' }}>
        Заберіть замовлення в найближчій до Вас аптеці
      </Typography>
    </Box>
  </Box>
);
