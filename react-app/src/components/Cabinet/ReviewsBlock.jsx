import { Typography, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import Loading from './Loading';
import ProductReviews from './ProductReviews';
import { getUserReviewsFromDB } from '../../utils/Responses/getUserReviewsFromDB';
import { theme as muiTheme } from '../../tools/muiTheme';
import { noReviewsStyles } from './style';

const ReviewsBlock = () => {
  const [isLoading, setLoading] = useState(true);
  const [productReviews, setProductReviews] = useState([]);
  const changeStateReview = useSelector(state => state.user.changeStateReview);
  const userId = useSelector(state => state.user.id);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [changeStateReview]);

  useEffect(() => {
    const fetchData = async userID => {
      const { data } = await getUserReviewsFromDB(userID);
      setProductReviews(data);
    };

    fetchData(userId);
  }, [changeStateReview]);

  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ minHeight: '500px', maxWidth: '70vw', margin: '0 auto' }}>
        {isLoading && <Loading />}
        {!isLoading && (
          <Box sx={{ margin: '0 auto' }}>
            {!!productReviews &&
              productReviews.map((item, index) => (
                <ProductReviews key={`${item.id}-${index}`} item={item} setLoading={setLoading} />
              ))}
            {productReviews.length < 1 && (
              <Typography sx={noReviewsStyles}>Відгуки товарів відсутні</Typography>
            )}
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default ReviewsBlock;
