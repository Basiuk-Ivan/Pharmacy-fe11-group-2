import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import ReviewList from '../ReviewList';
import ReviewForm from '../ReviewForm';

const ProductCardReviews = ({productItem}) => {
  const isAuth = useSelector(state => state.user.isAuth);

  return (
    <Box>
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
          {isAuth &&
          <Box>
            <Typography
              variant="h5"
              component="h5"
              gutterBottom
              sx={{ mb: '30px', fontSize: '18px', lineHeight: '18px', fontWeight: '500' }}
            >
              Залишити відгук
            </Typography>
            <ReviewForm product={productItem}/>
          </Box>}

          {!isAuth &&
          <Typography
            variant="h4"
            component="h4"
            gutterBottom
            sx={{ mb: '30px', fontSize: '20px', lineHeight: '22px', fontWeight: '500' }}
          >
            Додати відгук може лише авторизований користувач
          </Typography>}
          <ReviewList product = {productItem} />
        </Box>
      </Box>
    </Box>);
};
export default ProductCardReviews;
