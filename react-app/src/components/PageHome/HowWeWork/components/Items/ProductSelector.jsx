import { Box, Typography } from '@mui/material';
import checkList from '../../../../../assets/howWeWork/checklist.svg';
import { wrapperForItem, wrapperForImg } from '../../style';

export const ProductSelector = () => (
  <Box sx={wrapperForItem}>
    <Box sx={wrapperForImg}>
      <img src={checkList} alt="paymentPoint" />
    </Box>
    <Box>
      <Typography fontFamily="Roboto" sx={{ fontWeight: 700, fontSize: '15px' }}>
        Оберіть товар
      </Typography>
      <Typography sx={{ color: '#828282', fontSize: '14px' }}>
        Скористайтесь пошуком, щоб знайти необхідний товар
      </Typography>
    </Box>
  </Box>
);
