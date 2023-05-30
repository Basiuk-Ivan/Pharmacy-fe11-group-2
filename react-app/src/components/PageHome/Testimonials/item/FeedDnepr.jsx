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


export const FeedDnepr = () =>
  <Typography fontFamily="Roboto" component="div" sx={feedBackItem}>
    <Typography fontFamily="Roboto" component="p" sx={feedBackItemStar}>
      <Typography fontFamily="Roboto" component="div" >
      <Typography fontFamily="Roboto" component="span" sx={feedBackName}>Ліана, Дніпро,</Typography>  <Typography fontFamily="Roboto" component="span" sx={feedBackDate}> 25 Июля</Typography>
      </Typography>
      <Rating name="half-rating" defaultValue={5} sx={StarRateItem} readOnly  />
    </Typography>
    <Typography fontFamily="Roboto" component="p" sx={feedBackItemText}>
      Благодарим Викторию Сдобнову за все эти качества и желаем ей долгих лет жизни, ибо она очень помогает людям, всегда добро желательна, все объяснит, посоветует.
    </Typography>
  </Typography>;

