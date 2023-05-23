import { Box, Typography } from '@mui/material';
import { promoMenuStyles } from './style';

const DiscountBanner = () => (
  <Box position="absolute" sx={promoMenuStyles}>
    <Typography>Знижки до 70% </Typography>
  </Box>
);

export default DiscountBanner;
