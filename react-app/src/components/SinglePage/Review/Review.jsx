import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Avatar, Typography, Stack, Rating, Box } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const Review = () => {
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
      // eslint-disable-next-line no-console
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
      {!!productReviews && productReviews.reviews.map((item, index) => {
        const date = new Date(Number(item.dateReview));
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${day}.${month}.${year}`;

        // new Date(item.dateReview);

        return (
          <Stack key={index} sx={{ mb: '40px' }}>
            <Stack direction="row" justifyContent="space-between" sx={{ mb: '20px' }}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '200px' }}>
                <Avatar alt="Remy Sharp" src={item.icon} sx={{ width: 56, height: 56 }} />
                <Typography
                  variant="p"
                  component="p"
                  gutterBottom
                  sx={{ mb: '30px', fontSize: '18px', lineHeight: '18px', fontWeight: '500', mr: '10px' }}
                >
                  {item.authorName}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ paddingRight: '10px' }}>
                <Rating name="read-only" value={item.rating} readOnly />
                <Typography
                  variant="p"
                  component="p"
                  gutterBottom
                  sx={{ mb: '30px', fontSize: '18px', lineHeight: '18px', fontWeight: '500', mr: '10px' }}
                >
                  {formattedDate}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ paddingRight: '10px' }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <ThumbUpOutlinedIcon />
                  <Typography
                    variant="p"
                    component="p"
                    gutterBottom
                    sx={{ fontSize: '16px', lineHeight: '16px', fontWeight: '400' }}
                  >
                    {item.countLike}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <ThumbDownOutlinedIcon />
                  <Typography
                    variant="p"
                    component="p"
                    gutterBottom
                    sx={{ fontSize: '16px', lineHeight: '16px', fontWeight: '400' }}
                  >
                    {item.countDislike}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Box sx={{ textAlign: 'justify' }}>{item.mainText}</Box>
          </Stack>
        );
      })}
    </Box>
  );
};

export default Review;
