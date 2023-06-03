import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Typography, Stack } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { addToCartLocalStor } from '../../../utils/addToCartLocalStor';
import { removeFromCartLocalStor } from '../../../utils/removeFromCartLocalStor';
import { addItem } from '../../../redux/slice/cartItems';
import { priceStyles, discountStyles, cartStyles } from '../style';

export const PriceCard = ({ productItem }) => {
  const dispatch = useDispatch();
  const [isCart, setIsCart] = useState(false);

  const cartStyle = cartStyles(isCart);

  const handleAddtoCart = event => {
    event.preventDefault();
    setIsCart(!isCart);

    if (!isCart) {
      dispatch(addItem(productItem));
      addToCartLocalStor(productItem);
    } else {
      removeFromCartLocalStor(productItem, dispatch);
    }
  };

  useEffect(() => {
    const productItemCart = localStorage.getItem(`cartItem_${productItem.id}`);

    if (productItemCart) {
      const isInCart = JSON.parse(productItemCart);
      setIsCart(isInCart);
    }
  }, [productItem.id]);

  const discountedPrice = Math.ceil(productItem.price * ((100 - productItem.discount) / 100));

  return (
    <Stack spacing={2} direction="row" justifyContent="space-between">
      <Stack direction="column">
        <Typography variant="body1" sx={priceStyles}>
          {productItem.discount > 0 ? `${discountedPrice} ГРН.` : `${productItem.price} ГРН.`}
        </Typography>

        {productItem.discount > 0 && (
          <Typography variant="body2" sx={discountStyles}>
            {productItem.price} ГРН.
          </Typography>
        )}
      </Stack>

      <IconButton onClick={handleAddtoCart} sx={cartStyle}>
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </Stack>
  );
};
