import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import Review from "./Review";
import {getProductReviewsFromDB} from "../../../../utils/ActionsWithProduct/getProductReviewsFromDB";

const ReviewList = () => {
  const { id } = useParams();
  const [productReviews, setProductReviews] = useState([]);
  const changeStateReview = useSelector(state => state.user.changeStateReview);

  useEffect(() => {
    const fetchData = async productId => {
      try {
        const response = await getProductReviewsFromDB(productId);
        // if (!response.statusText) {
        //   throw new Error('Network response was not ok');
        // }
        const { data } = await response;
        setProductReviews(data);
      } catch (error) {
        console.log('Error fetching products:', error);
        return null;
      }
    };
    fetchData(id);
  }, [id, changeStateReview]);

  return (
    <Box sx={{ mt: '40px' }}>
      {!!productReviews && productReviews.map((item, index) => <Review key={`${item.id}-${index}`} item={item} />)}
    </Box>
  );
};

export default ReviewList;
