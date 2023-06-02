import { useState } from 'react';
import { Typography, Rating, Stack } from '@mui/material';
import { bodyForquantityStyles, textForquantityStyles, ratingStyles } from '../style';

export const RatingCard = ({ productItem }) => {
  // const [value, setValue] = useState(5);
  const [value, setValue] = useState(productItem?.rating || 0);

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={bodyForquantityStyles}>
      <Typography variant="p" gutterBottom sx={textForquantityStyles}>
        {productItem?.quantity > 0 ? 'Є в наявності' : 'Товар відсутній'}
      </Typography>
      <Rating
        sx={ratingStyles}
        name="simple-controlled"
        value={parseFloat(value)}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Stack>
  );
};
