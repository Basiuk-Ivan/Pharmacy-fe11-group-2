import { Stack } from '@mui/material';
import { CartButton } from './components/CartButton';
import { QuantityControl } from './components/QuantityControl';
import { ProductPrice } from './components/ProductPrice';
import { stackStyles } from '../../../../style';

export const PriceCard = ({ productItem, isInCart }) => {
  const stackWrappStyles = stackStyles(isInCart);

  return (
    <Stack spacing={2} sx={stackWrappStyles} direction="row">
      <ProductPrice productItem={productItem} />
      <CartButton productItem={productItem} isInCart={isInCart} />
      <QuantityControl isInCart={isInCart} productItem={productItem} />
    </Stack>
  );
};
