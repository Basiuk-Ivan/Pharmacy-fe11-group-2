import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import {formBlockStyles, formBlockTitleStyles, formErrorStyles, reviewTitleStyles} from './style';
import ReviewList from "./components/ReviewList";
import ReviewForm from "./components/ReviewForm";

const ProductCardReviews = ({ productItem }) => {
  const isAuth = useSelector(state => state.user.isAuth);

  return (
    <Box>
      <Box>
        <Typography variant="h4" component="h4" gutterBottom sx={reviewTitleStyles}>
          Відгуки
        </Typography>

        <Box sx={formBlockStyles} noValidate autoComplete="off">
          {isAuth &&
          <Box>
            <Typography variant="h5" component="h5" gutterBottom sx={formBlockTitleStyles}>
              Залишити відгук
            </Typography>
            <ReviewForm product={productItem} />
          </Box>}

          {!isAuth &&
          <Typography variant="h4" component="h4" gutterBottom sx={formErrorStyles}>
            Додати відгук може лише авторизований користувач
          </Typography>}
          <ReviewList product={productItem} />
        </Box>
      </Box>
    </Box>);
};
export default ProductCardReviews;
