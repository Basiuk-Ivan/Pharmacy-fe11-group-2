/* eslint-disable */
import { Box, Button, Link, Rating, Typography } from '@mui/material';
import React from 'react';
import {
  ave,
  aveRate,
  aveText,
  btnFeed,
  feedBack,
  linkFeed,
  mainFeedback,
  StarRate,
  totalCountFeed,
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
      <Box>
        <Button variant="contained" sx={btnFeed}>
          Залишити відгук
        </Button>
      </Box>
    </Box>
    <Box sx={feedBack}>
      <FeedKyiv />
      <FeedDnepr />
      <FeedLviv />
      <Typography fontFamily="Roboto" component="div" sx={totalCountFeed}>
        <Link sx={linkFeed}>Всі 4349 відгуків</Link>
      </Typography>
    </Box>
  </Box>
);

export default Testimonials;
