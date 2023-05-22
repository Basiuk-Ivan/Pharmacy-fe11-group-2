import { Box, Typography } from '@mui/material';

const DiscountBanner = () => {
  const promoMenuStyle = {
    background: '#4BC1E9',
    width: '100%',
    top: '130px'
  };
  return (
    <Box position="absolute" sx={promoMenuStyle}>
      <Typography>Знижки до 70% </Typography>
    </Box>
  );
};

export default DiscountBanner;
