import { Stack, Typography } from '@mui/material';
import { priceStyles, discountStyles } from '../../../../../style';

export const ProductPrice = ({ productItem }) => {
  const discountedPrice = Math.round(productItem.price * ((100 - productItem.discount) / 100));

  return (
    <Stack direction="column">
      <Typography variant="body1" sx={priceStyles}>
        {productItem.discount > 0 ? `${discountedPrice} ГРН.` : `${productItem.price} ГРН.`}
      </Typography>

      {productItem.discount > 0 && discountedPrice !== productItem.price && (
        <Typography variant="body2" sx={discountStyles}>
          {productItem.price} ГРН.
        </Typography>
      )}
    </Stack>
  );
};
