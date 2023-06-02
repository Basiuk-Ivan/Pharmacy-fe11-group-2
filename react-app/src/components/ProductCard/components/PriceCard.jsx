import { useDispatch } from 'react-redux';
import { IconButton, Typography, Stack } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { addItem } from '../../../redux/cartSlice';
import { priceStyles, discountStyles, cartStyles } from '../style';

export const PriceCard = ({ productItem }) => {
  const dispatch = useDispatch();

  const handleAddtoCart = event => {
    event.preventDefault();
    dispatch(addItem(productItem));
  };

  return (
    <Stack spacing={2} direction="row" justifyContent="space-between">
      <Stack direction="column">
        <Typography variant="body1" sx={priceStyles}>
          {productItem.discount > 0
            ? `${productItem.price * ((100 - productItem.discount) / 100)} ГРН.`
            : `${productItem.price} ГРН.`}
        </Typography>

        {productItem.discount > 0 && (
          <Typography variant="body2" sx={discountStyles}>
            {productItem.price} ГРН.
          </Typography>
        )}
      </Stack>

      <IconButton onClick={handleAddtoCart} sx={cartStyles}>
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </Stack>
  );
};
