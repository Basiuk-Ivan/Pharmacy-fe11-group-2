import { Rating, Typography, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  feedBackDate,
  feedBackItem,
  feedBackItemStar,
  feedBackItemText,
  feedBackName,
  StarRateItem
} from './style';
import { formatDate } from '../../../utils/ActionsWithProduct/formatDate';

export const Feed = ({ item }) => {
  const [dateValue, setDateValue] = useState(null);

  useEffect(() => {
    const formattedDate = formatDate(item.createdAt);
    setDateValue(formattedDate);
  }, [item.createdAt]);

  return (
    <Box sx={feedBackItem}>
      <Box sx={feedBackItemStar}>
        <Box>
          <Typography fontFamily="Roboto" component="span" sx={feedBackName}>
            {item.userName} {item.userSurname}
          </Typography>
          <Typography fontFamily="Roboto" component="span" sx={feedBackDate}>
            {dateValue}
          </Typography>
        </Box>
        <Rating name="half-rating" value={Number(item.rating)} sx={StarRateItem} readOnly />
      </Box>
      <Typography fontFamily="Roboto" component="p" sx={feedBackItemText}>
        {item.responseTxt}
      </Typography>
    </Box>
  );
};

export default Feed;
