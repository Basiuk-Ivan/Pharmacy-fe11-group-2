import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { addToCartLocalStorage } from '../../../../../../../utils/LocalStore/addToCartLocalStorage';
import { removeFromCartLocalStorage } from '../../../../../../../utils/LocalStore/removeFromCartLocalStorage';
import { addToCart, removeItem } from '../../../../../../../redux/slice/cartItems';
import { cartStyles, iconButtonStyles } from '../../../../../style';

export const CartButton = ({ productItem, isInCart }) => {
  const dispatch = useDispatch();
  const [isCart, setIsCart] = useState(false);

  const handleAddtoCart = event => {
    event.preventDefault();
    if (!isCart) {
      dispatch(addToCart({ id: productItem.id }));
      addToCartLocalStorage(productItem);
    } else {
      dispatch(removeItem(productItem));
      removeFromCartLocalStorage(productItem);
    }
    setIsCart(!isCart);
  };

  const delItem = prod => {
    dispatch(removeItem(prod));
    removeFromCartLocalStorage(prod);
  };

  useEffect(() => {
    const cartString = localStorage.getItem('cartItems');

    if (cartString) {
      const cartItems = JSON.parse(cartString);
      const isItemCart = cartItems.some(elem => elem.id === productItem.id);
      setIsCart(isItemCart);
    }
  }, [isCart, productItem.id]);

  const cartStyle = cartStyles(isCart);

  if (isInCart) {
    return (
      <IconButton sx={iconButtonStyles} onClick={() => delItem(productItem)}>
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
