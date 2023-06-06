import { Box, Typography } from '@mui/material';
import ReviewList from '../ReviewList';
import ReviewForm from '../ReviewForm';

const ProductCardReviews = () => (
  <Box>
    <Typography
      variant="h4"
      component="h4"
      gutterBottom
      sx={{ mt: '68px', mb: '30px', fontSize: '36px', lineHeight: '42px', fontWeight: '700' }}
    >
      Відгуки
    </Typography>

    <Box
      sx={{
        borderRadius: '20px',
        backgroundColor: '#F7FAFB',
        padding: '30px'
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        variant="h5"
        component="h5"
        gutterBottom
        sx={{ mb: '30px', fontSize: '18px', lineHeight: '18px', fontWeight: '500' }}
      >
        Залишити відгук
      </Typography>
      <ReviewForm />
      <ReviewList />

    </Box>
  </Box>
);
export default ProductCardReviews;
