import { Box, Typography } from '@mui/material';
import hospital from '../../../../assets/todayPharmacy/hospital.svg';
import { wrapperForItem, wrapperForImg, textStyles } from '../style';

export const PharmaciesOver750 = () => (
  <Box sx={wrapperForItem}>
    <Box sx={wrapperForImg}>
      <img src={hospital} alt="blank" />
    </Box>
    <Box>
      <Typography sx={textStyles}>Понад 750 аптек</Typography>
    </Box>
  </Box>
);
