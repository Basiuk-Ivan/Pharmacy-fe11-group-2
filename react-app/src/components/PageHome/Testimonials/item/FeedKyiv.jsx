import { Rating, Typography, Box } from '@mui/material';
import {
  feedBackDate,
  feedBackItem,
  feedBackItemStar,
  feedBackItemText,
  feedBackName,
  StarRateItem
} from '../style';

export const FeedKyiv = () => (
  <Box sx={feedBackItem}>
    <Box sx={feedBackItemStar}>
      <Box>
        <Typography fontFamily="Roboto" component="span" sx={feedBackName}>
          Ліана, Київ,
        </Typography>
        <Typography fontFamily="Roboto" component="span" sx={feedBackDate}>
          25 Июля
        </Typography>
      </Box>
      <Rating name="half-rating" defaultValue={5} sx={StarRateItem} readOnly />
    </Box>
    <Typography fontFamily="Roboto" component="p" sx={feedBackItemText}>
      По недоразумению и своей невнимательности, купила не тот товар, разобрались и обменяли без лишней
      болтовни и проволочек. Низкий поклон и спасибо! Ваш, теперь. постоянный покупатель.
    </Typography>
  </Box>
);
