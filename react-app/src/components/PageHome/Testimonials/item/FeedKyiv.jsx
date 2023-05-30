import {Rating, Typography} from "@mui/material";
import {
  feedBackDate,
  feedBackItem,
  feedBackItemStar,
  feedBackItemText, feedBackName,
  StarRate,
  StarRateItem
} from "../style/index.js";
import React from "react";


export const FeedKyiv = () =>
  <Typography fontFamily="Roboto" component="div" sx={feedBackItem}>
    <Typography fontFamily="Roboto" component="p" sx={feedBackItemStar}>
      <Typography fontFamily="Roboto" component="div" >
      <Typography fontFamily="Roboto" component="span" sx={feedBackName}>Ліана, Київ,</Typography>  <Typography fontFamily="Roboto" component="span" sx={feedBackDate}> 25 Июля</Typography>
      </Typography>
      <Rating name="half-rating" defaultValue={5} sx={StarRateItem} readOnly  />
    </Typography>
    <Typography fontFamily="Roboto" component="p" sx={feedBackItemText}>
      По недоразумению и своей невнимательности, купила не тот товар, разобрались и обменяли без лишней болтовни и проволочек. Низкий поклон и спасибо! Ваш, теперь. постоянный покупатель.
    </Typography>
  </Typography>;

