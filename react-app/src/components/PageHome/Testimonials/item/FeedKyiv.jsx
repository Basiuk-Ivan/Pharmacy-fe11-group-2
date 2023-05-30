import { Rating, Typography } from '@mui/material';
import React from 'react';
import {
  feedBackDate,
  feedBackItem,
  feedBackItemStar,
  feedBackItemText, feedBackName,
  // eslint-disable-next-line no-unused-vars
  StarRate,
  StarRateItem
// eslint-disable-next-line import/extensions
} from '../style/index.js';

export const FeedKyiv = () => (
  <Typography fontFamily="Roboto" component="div" sx={feedBackItem}>
    <Typography fontFamily="Roboto" component="p" sx={feedBackItemStar}>
      <Typography fontFamily="Roboto" component="div">
        {/* eslint-disable-next-line max-len */}
        <Typography fontFamily="Roboto" component="span" sx={feedBackName}>Ліана, Київ,</Typography>  <Typography fontFamily="Roboto" component="span" sx={feedBackDate}> 25 Июля</Typography>
      </Typography>
      <Rating name="half-rating" defaultValue={5} sx={StarRateItem} readOnly />
    </Typography>
    <Typography fontFamily="Roboto" component="p" sx={feedBackItemText}>
      {/* eslint-disable-next-line max-len */}
      По недоразумению и своей невнимательности, купила не тот товар, разобрались и обменяли без лишней болтовни и проволочек. Низкий поклон и спасибо! Ваш, теперь. постоянный покупатель.
    </Typography>
  </Typography>
);
