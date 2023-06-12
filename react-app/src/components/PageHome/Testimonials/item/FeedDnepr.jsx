import { Rating, Typography, Box } from '@mui/material';
import {
  feedBackDate,
  feedBackItem,
  feedBackItemStar,
  feedBackItemText,
  feedBackName,
  StarRateItem
} from '../style';

export const FeedDnepr = () => (
  <Box sx={feedBackItem}>
    <Box sx={feedBackItemStar}>
      <Box>
        <Typography fontFamily="Roboto" component="span" sx={feedBackName}>
          Ліана, Дніпро,
        </Typography>
        <Typography fontFamily="Roboto" component="span" sx={feedBackDate}>
          25 Июля
        </Typography>
      </Box>
      <Rating name="half-rating" defaultValue={5} sx={StarRateItem} readOnly />
    </Box>
    <Typography fontFamily="Roboto" component="p" sx={feedBackItemText}>
      Дякуємо Вікторії Сдобновій за всі ці якості і бажаємо їй довгих років життя, бо вона дуже допомагає
      людям, завжди добро бажана, все пояснить, порадить.
    </Typography>
  </Box>
);
