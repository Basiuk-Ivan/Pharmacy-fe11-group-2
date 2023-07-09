import { Typography, Button, Grid, Container, Stack, Box, Avatar, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { getUserReviewsFromDB } from '../../utils/Responses/getUserReviewsFromDB';
import ProductReviews from './ProductReviews';
import { theme as muiTheme } from '../../tools/muiTheme.js';
import DataBlock from './DataBlock.jsx';

const ReviewsBlock = () => {
  const [isLoading, setLoading] = useState(true);
  const changeStateReview = useSelector(state => state.user.changeStateReview);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [changeStateReview]);

  const [productReviews, setProductReviews] = useState([]);
  const userId = useSelector(state => state.user.id);


  useEffect(() => {
    const fetchData = async userID => {
      const { data } = await getUserReviewsFromDB(userID);
      setProductReviews(data);
    };

    fetchData(userId);
  }, [changeStateReview]);

  return (
    <ThemeProvider theme={muiTheme}>
      {isLoading ? <Stack spacing={2} direction="row" justifyContent="center">
        <CircularProgress color="primary" />
        <CircularProgress color="primary" />
        <CircularProgress color="primary" />
        <CircularProgress color="primary" />
        <CircularProgress color="primary" />
      </Stack>
        : <Box sx={{ mt: '40px' }}>
          {!!productReviews && productReviews.map((item, index) => <ProductReviews key={`${item.id}-${index}`} item={item} />)}
            {!productReviews &&
                <Typography
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      fontSize: 24,
                      fontWeight: 400,
                      mt: '100px',
                      mb: '100px',
                      color:"red"
                    }}
                >
                 Відгуки товарів відсутні
                </Typography>
            }
        </Box>}
    </ThemeProvider>
  );
};

export default ReviewsBlock;

