import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { addToCartLocalStor } from '../../../../../../../utils/LocalStore/addToCartLocalStor';
import { removeFromCartLocalStor } from '../../../../../../../utils/LocalStore/removeFromCartLocalStor';
import { addItem } from '../../../../../../../redux/slice/cartItems';
import { cartStyles, iconButtonStyles } from '../../../../../style';

export const CartButton = ({ productItem, isInCart }) => {
  const dispatch = useDispatch();
  const [isCart, setIsCart] = useState(false);

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

  const cartStyle = cartStyles(isCart);

  if (isInCart) {
    return (
      <IconButton sx={iconButtonStyles} onClick={handleAddtoCart}>
        <CloseIcon />
      </IconButton>
    );
  }
  return (
    <IconButton onClick={handleAddtoCart} sx={cartStyle}>
      <ShoppingCartOutlinedIcon />
    </IconButton>
  );
};
