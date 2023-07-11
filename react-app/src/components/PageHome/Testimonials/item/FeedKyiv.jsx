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
          Олег, Київ,
        </Typography>
        <Typography fontFamily="Roboto" component="span" sx={feedBackDate}>
          2 червня
        </Typography>
      </Box>
      <Rating name="half-rating" defaultValue={5} sx={StarRateItem} readOnly />
    </Box>
    <Typography fontFamily="Roboto" component="p" sx={feedBackItemText}>
      Приємний кваліфікований персонал, готовий завжди допомогти. Нещодавно необхідно було замовити рідкісний препарат, якій майже відсутній в Україні. Все було чудово організовано і на третій день я вже отримав цей препарат. Щиро вдячний.
    </Typography>
  </Box>
);
