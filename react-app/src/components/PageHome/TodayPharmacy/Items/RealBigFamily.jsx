import { Box, Typography } from '@mui/material';
import hospital from '../../../../assets/todayPharmacy/hospital.svg';
import { wrapperForItem, wrapperForImg, textStyles } from '../style';

export const RealBigFamily = () => (
  <Box sx={wrapperForItem}>
    <Box sx={wrapperForImg}>
      <img src={hospital} alt="blank" />
    </Box>
    <Box>
      <Typography sx={textStyles}> Справжня велика родина!</Typography>
    </Box>
  </Box>
);
