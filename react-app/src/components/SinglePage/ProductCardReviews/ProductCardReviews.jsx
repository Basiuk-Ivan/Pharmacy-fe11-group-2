import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { formBlockStyles, formBlockTitleStyles, formErrorStyles, reviewTitleStyles } from './style';
import ReviewList from './components/ReviewList';
import ReviewForm from './components/ReviewForm';

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

ProductCardReviews.propTypes = {
  productItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number,
    productOfTheDay: PropTypes.bool,
    useful: PropTypes.bool,
    article: PropTypes.number.isRequired,
    quantity: PropTypes.number,
    brand: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    productForm: PropTypes.string.isRequired,
    bestBeforeDate: PropTypes.string,
    prescriptionLeave: PropTypes.bool.isRequired,
    whoCanChildren: PropTypes.bool.isRequired,
    whoCanPregnant: PropTypes.bool.isRequired,
    ratingClick: PropTypes.number,
    ratingTotal: PropTypes.number,
    packageQuantity: PropTypes.string,
    promotionOfTheMonth: PropTypes.bool,
    descriptionForSlider: PropTypes.string,
    analogs: PropTypes.string
  }).isRequired
};
export default ProductCardReviews;
