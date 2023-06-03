import { Box, Stack } from '@mui/material';
import { wrappForDetails } from '../style';

import s from '../style/ProductCard.module.scss';

export const ProductDetails = ({ productItem }) => (
  <Box sx={wrappForDetails}>
    <Stack direction="column">
      <Stack direction="row" alignItems="center">
        <span className={s.bullet} />
        <span className={s.brandTitle}>Бренд:</span>
        <span className={s.brandValue}>{productItem?.characteristics?.brand}</span>
      </Stack>
      <Stack direction="row" alignItems="center">
        <span className={s.bullet} />
        <span className={s.brandTitle}>Кількість в упаковці:</span>
        <span className={s.brandValue}>{productItem?.quantity}</span>
      </Stack>
      <Stack direction="row" alignItems="center">
        <span className={s.bullet} />
        <span className={s.brandTitle}>Код товару:</span>
        <span className={s.brandValue}>{productItem?.article}</span>
      </Stack>
    </Stack>
  </Box>
);