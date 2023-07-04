import { useEffect, useState } from 'react';
import { Typography, Rating, Stack } from '@mui/material';
import { textForquantityStyles, ratingStyles } from '../../../style';

export const RatingCard = ({ productItem }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(Math.round(productItem.ratingTotal / productItem.ratingClick));
  }, [productItem.ratingClick, productItem.ratingTotal]);

  return (
    <Stack direction="row" sx={{ gap: '10px', flexWrap: 'wrap' }} alignItems="center">
      <Typography variant="p" gutterBottom sx={{fontSize: '12px',
          fontWeight: 700,
          color: productItem?.quantity > 0 ? '#2FD3AE' : '#910808'}}>
        {productItem?.quantity > 0 ? 'Є в наявності' : 'Відсутній'}
      </Typography>
      <Rating sx={ratingStyles} name="read-only" value={value} readOnly />
    </Stack>
  );
};
