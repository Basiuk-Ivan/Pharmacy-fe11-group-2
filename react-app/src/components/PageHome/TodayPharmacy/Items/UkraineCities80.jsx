import { Box, Typography } from '@mui/material';
import blank from '../../../../assets/todayPharmacy/blank.svg';
import { wrapperForItem, wrapperForImg, textStyles } from '../style';

export const UkraineCities80 = () => (
  <Box sx={wrapperForItem}>
    <Box sx={wrapperForImg}>
      <img src={blank} alt="blank" />
    </Box>
    <Box>
      <Typography sx={textStyles}>80 міст України</Typography>
    </Box>
  </Box>
);
