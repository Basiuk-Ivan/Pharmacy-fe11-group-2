import { Box, Typography } from '@mui/material';
import blank from '../../../../assets/todayPharmacy/blank.svg';
import { wrapperForItem, wrapperForImg, textStyles } from '../style';

export const EmployeesOver5000 = () => (
  <Box sx={wrapperForItem}>
    <Box sx={wrapperForImg}>
      <img src={blank} alt="blank" />
    </Box>
    <Box>
      <Typography sx={textStyles}>Більше 5000 працівників</Typography>
    </Box>
  </Box>
);
