import { Rating, Typography, Box } from '@mui/material';
import {
  feedBackDate,
  feedBackItem,
  feedBackItemStar,
  feedBackItemText,
  feedBackName,
  StarRateItem
} from '../style';

export const FeedLviv = () => (
  <Box sx={feedBackItem}>
    <Box sx={feedBackItemStar}>
      <Box>
        <Typography fontFamily="Roboto" component="span" sx={feedBackName}>
          Олена, Львів,
        </Typography>
        <Typography fontFamily="Roboto" component="span" sx={feedBackDate}>
          7 січня
        </Typography>
      </Box>
      <Rating name="half-rating" defaultValue={5} sx={StarRateItem} readOnly />
    </Box>
    <Typography fontFamily="Roboto" component="p" sx={feedBackItemText}>
      Дякую за можливість купувати ліки не виходячи з дому. Хочеться окремо сказати спасибі кур'єру, дівчина
      Юлія була дуже усміхнена, прямо заряджає гарним настроєм, ввічлива, побажала як найшвидшого одужання.
    </Typography>
  </Box>
);
