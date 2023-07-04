/* eslint-disable */
import { Box, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  ave,
  aveRate,
  aveText,
  feedBack,
  linkFeed,
  mainFeedback,
  StarRate,
  totalCountFeed,
  totalRate,
  wrapperForTestimonials
} from './style';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getResponsesFromDB } from '../../../utils/Responses/getResponsesFromDB.js';
import Feed from './Feed';

const Testimonials = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const [averageRating, setAverageRating] = useState(4.5);
  const [totalFound, setTotalFound] = useState(0);
  const changeStateReview = useSelector(state => state.user.changeStateReview);
  const [respondsForHome, setResponsForHome] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getResponsesFromDB(1);

      const { data } = await res;

      setAverageRating(data.roundedValueRating);
      setTotalFound(data.totalFound);
      setResponsForHome(data.respondsForHome);
    } catch (error) {
      console.log('Error fetching products:', error);
      return null;
    }
  };

  useEffect(() => {
    fetchData();
  }, [changeStateReview]);

  return (
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
            <Rating name="half-rating" value={Number(averageRating)} sx={StarRate} readOnly precision={0.5} />
          </Box>
        </Box>
        <Typography fontFamily="Roboto" component="div" sx={totalRate}>
          Загальний рейтинг на основі <br /> {totalFound} відгуків наших покупців
        </Typography>
      </Box>
      <Box sx={feedBack}>
        {!!respondsForHome && respondsForHome.map((item, index) => <Feed key={index} item={item} />)}
        <Typography fontFamily="Roboto" component="div" sx={totalCountFeed}>
          <NavLink to="/respond" sx={linkFeed}>
            Всі {totalFound} відгуків
          </NavLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default Testimonials;
