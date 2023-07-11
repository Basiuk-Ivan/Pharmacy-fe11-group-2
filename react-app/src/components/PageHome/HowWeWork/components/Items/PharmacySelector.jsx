import { Box, Typography } from '@mui/material';
import building from '../../../../../assets/howWeWork/building.svg';
import { wrapperForItem, wrapperForImg } from '../../style';

export const PharmacySelector = () => (
  <Box sx={wrapperForItem}>
    <Box sx={wrapperForImg}>
      <img src={building} alt="building" />
    </Box>
    <Box>
      <Typography fontFamily="Roboto" sx={{ fontWeight: 700, fontSize: '15px' }}>
        Оберіть аптеку
      </Typography>
      <Typography sx={{ color: '#828282', fontSize: '14px' }}>
        Де Вам буде зручно забрати замовлення
      </Typography>
    </Box>
  </Box>
);
