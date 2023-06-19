/* eslint-disable */
import { Box, Rating, Typography } from '@mui/material';
import React from 'react';
import {
  ave,
  aveRate,
  aveText,
  feedBack,
  mainFeedback,
  StarRate,
  totalRate,
  wrapperForTestimonials
} from './style';
import { FeedKyiv } from './item/FeedKyiv.jsx';
import { FeedDnepr } from './item/FeedDnepr.jsx';
import { FeedLviv } from './item/FeedLviv.jsx';

const Testimonials = () => (
  <Box sx={wrapperForTestimonials}>
    <Box sx={mainFeedback}>
      <Box sx={ave}>
        <Typography fontFamily="Roboto" component="div" sx={aveText}>
          Середня <br /> оцінка <br /> аптеки
        </Typography>
        <Box>
          <Typography fontFamily="Roboto" component="div" sx={aveRate}>
            4.8
          </Typography>
          <Rating name="half-rating" defaultValue={4} sx={StarRate} readOnly />
        </Box>
      </Box>
      <Typography fontFamily="Roboto" component="div" sx={totalRate}>
        Загальний рейтинг на основі 4349 <br /> відгуків наших покупців
      </Typography>
    </Box>
    <Box sx={feedBack}>
      <FeedKyiv />
      <FeedDnepr />
      <FeedLviv />
    </Box>
  </Box>
);

export default Testimonials;
