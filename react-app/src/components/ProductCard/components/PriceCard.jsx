import * as React from 'react';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Typography, Stack, ButtonBase, Box } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { addToCartLocalStor } from '../../../utils/addToCartLocalStor';
import { removeFromCartLocalStor } from '../../../utils/removeFromCartLocalStor';
import { addItem } from '../../../redux/slice/cartItems';

import { priceStyles, discountStyles, cartStyles } from '../style';

export const PriceCard = ({ productItem, isInCart }) => {
  const dispatch = useDispatch();
  const [isCart, setIsCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const cartStyle = cartStyles(isCart);

  const handleIncrement = event => {
    event.preventDefault();
    setQuantity(quantity + 1);
  };

  const handleDecrement = event => {
    event.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

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
      // eslint-disable-next-line no-shadow
      const isInCart = JSON.parse(productItemCart);
      setIsCart(isInCart);
    }
  }, [productItem.id]);

  const discountedPrice = Math.ceil(productItem.price * ((100 - productItem.discount) / 100));

  return (
    <Stack spacing={2} sx={{ flex: '1 1 50%', paddingTop: '20px', gap: '50px' }} direction="row">
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

      {isInCart ? (
        <IconButton
          sx={{
            position: 'absolute',
            top: '-11px',
            right: '-12px',
            display: 'flex',
            justifyContent: 'end',
            background: '#828282',
            color: 'white',
            width: '25px',
            height: '25px',
            padding: 0,
            '&:hover': {
              color: '#828282'
            }
          }}
          onClick={handleAddtoCart}
        >
          <CloseIcon />
        </IconButton>
      ) : (
        <IconButton onClick={handleAddtoCart} sx={cartStyle}>
          <ShoppingCartOutlinedIcon />
        </IconButton>
      )}
      {isInCart ? (
        <Box sx={{ position: 'relative', mb: '14px' }}>
          <ButtonBase
            sx={{
              width: '20px',
              padding: '0',
              height: '14px',
              position: 'absolute',
              top: '10px',
              left: '-5px',
              backgroundColor: '#DD8888',
              fontSize: '18px',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"Roboto", "san-serif"'
            }}
            onClick={handleDecrement}
          >
            -
          </ButtonBase>
          <Box
            sx={{
              padding: '4px 20px',
              borderRadius: '50px',
              backgroundColor: '#ffffff',
              // height:'32px',
              textAlign: 'center',
              fontFamily: '"Roboto", "san-serif"',
              boxShadow: '0px 0px 40px rgba(11, 54, 29, 0.1)'
            }}
          >
            {quantity}
          </Box>
          <ButtonBase
            onClick={handleIncrement}
            sx={{
              position: 'absolute',
              width: '20px',
              height: '14px',
              top: '10px',
              right: '-5px',
              padding: 0,
              margin: 0,
              backgroundColor: ' #2FD3AE',
              fontSize: '18px',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            +
          </ButtonBase>
        </Box>
      ) : null}
    </Stack>
  );
};
