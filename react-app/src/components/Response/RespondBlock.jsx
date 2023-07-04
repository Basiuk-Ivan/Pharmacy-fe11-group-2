import { Box, Typography, Rating } from '@mui/material';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import RespondForm from './RespondForm';
import RespondList from './RespondList';
import {
  ave,
  aveRate,
  aveText,
  feedBack, linkFeed,
  mainFeedback,
  StarRate, totalCountFeed,
  totalRate,
  wrapperForTestimonials,
} from './style';
import { getResponsesFromDB } from '../../utils/Responses/getResponsesFromDB';

const RespondBlock = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const [averageRating, setAverageRating] = useState(4.5);
  const [totalFound, setTotalFound] = useState();
  const changeStateReview = useSelector(state => state.user.changeStateReview);

  const fetchData = async () => {
    try {
      const res = await getResponsesFromDB(1);

      const { data } = await res;

      setAverageRating(data.roundedValueRating);
      setTotalFound(data.totalFound);
    } catch (error) {
      console.log('Error fetching products:', error);
      return null;
    }
  };

  useEffect(() => {
    fetchData();
  }, [changeStateReview]);

  return (
    <Box>
      <Box sx={wrapperForTestimonials}>
        <Box sx={mainFeedback}>
          <Box sx={ave}>
            <Typography fontFamily="Roboto" component="div" sx={aveText}>
              Середня <br /> оцінка <br /> аптеки
            </Typography>
            <Box>
              <Typography fontFamily="Roboto" component="div" sx={aveRate}>
                {averageRating}
              </Typography>
              <Rating name="half-rating" value={averageRating} sx={StarRate} readOnly precision={0.5} />
            </Box>
          </Box>
          <Typography fontFamily="Roboto" component="div" sx={totalRate}>
            Загальний рейтинг на основі  <br /> {totalFound} відгуків наших покупців
          </Typography>
        </Box>
      </Box>
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
          <RespondForm />
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
        <RespondList />
      </Box>
    </Box>);
};
export default RespondBlock;
