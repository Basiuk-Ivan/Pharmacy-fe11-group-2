import { Box, Stack } from '@mui/material';
import { wrappForDetailsStyles } from '../../../style';

import s from '../../../style/ProductCard.module.scss';

export const ProductDetails = ({ productItem, isInCart }) => {
  const wrappForDetails = wrappForDetailsStyles(isInCart);

  return (
    <Box sx={wrappForDetails}>
      <Stack direction="column">
        <Stack direction="row" alignItems="center">
          <span className={s.bullet} />
          <span className={s.brandTitle}>Бренд:</span>
          <span className={s.brandValue}>{productItem?.brand}</span>
        </Stack>
        <Stack direction="row" alignItems="center">
          <span className={s.bullet} />
          <span className={s.brandTitle}>Кількість в упаковці:</span>
          <span className={s.brandValue}>{productItem?.packageQuantity}</span>
        </Stack>
        <Stack direction="row" alignItems="center">
          <span className={s.bullet} />
          <span className={s.brandTitle}>Код товару:</span>
          <span className={s.brandValue}>{productItem?.article}</span>
        </Stack>
      </Stack>
    </Box>
  );
};
