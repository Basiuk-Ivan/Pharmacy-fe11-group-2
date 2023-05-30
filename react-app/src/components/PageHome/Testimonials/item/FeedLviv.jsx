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


export const FeedLviv = () =>
  <Typography fontFamily="Roboto" component="div" sx={feedBackItem}>
    <Typography fontFamily="Roboto" component="p" sx={feedBackItemStar}>
      <Typography fontFamily="Roboto" component="div" >
      <Typography fontFamily="Roboto" component="span" sx={feedBackName}>Ліана, Львів,</Typography>  <Typography fontFamily="Roboto" component="span" sx={feedBackDate}> 25 Июля</Typography>
      </Typography>
      <Rating name="half-rating" defaultValue={5} sx={StarRateItem} readOnly  />
    </Typography>
    <Typography fontFamily="Roboto" component="p" sx={feedBackItemText}>
      Спасибо за возможность покупать лекарства не выходя из дома. Хочется отдельно сказать спасибо курьеру, девушка Юлия была очень улыбчивая, прямо заряжает хорошим настроением, вежливая , пожелала скорейшего выздоровления.
    </Typography>
  </Typography>;

