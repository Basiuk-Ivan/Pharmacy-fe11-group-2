import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Review from '../Review';

const ReviewList = () => {
  const { id } = useParams();
  const [productReviews, setProductReviews] = useState(null);

  const getReviews = async url => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.log('Error fetching products:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const allDataReviews = await getReviews('../reviews.json');

      const reviewsThisProduct = allDataReviews.find(item => item.id === id);

      setProductReviews(reviewsThisProduct);
    };
    fetchData();
  }, [id]);

  return (
    <Box sx={{ mt: '40px' }}>
      {!!productReviews && productReviews.reviews.map((item, index) => <Review key={index} item={item} />)}
    </Box>
  );
};

export default ReviewList;
