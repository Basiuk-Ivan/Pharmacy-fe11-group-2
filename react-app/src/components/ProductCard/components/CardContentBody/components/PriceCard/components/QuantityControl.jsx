import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addToCart, removeFromCart } from '../../../../../../../redux/slice/cartItems';
import { addToCartLocalStorage } from '../../../../../../../utils/LocalStore/addToCartLocalStorage';
import { removeCartItemFromLocalStorage } from '../../../../../../../utils/LocalStore/removeCartItemFromLocalStorage';
import { addToCartUserDBProduct } from '../../../../../../../utils/ActionsWithProduct/addToCartUserDBProduct.js';
import {
  removeFromCartUserDBProduct
} from '../../../../../../../utils/ActionsWithProduct/removeFromCartUserDBProduct.js';

export const QuantityControl = ({ productItem, isInCart }) => {
  const [quantity, setQuantity] = useState(1);
  const cartItems = useSelector(state => state.itemCards.items);
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user.isAuth);
  const userId = useSelector(state => state.user.id);

  useEffect(() => {
    if (isInCart && cartItems && cartItems.length > 0) {
      const order = cartItems?.find(item => item.id === productItem.id);
      if (order) {
        setQuantity(order.quantity);
      } else {
        setQuantity(null);
      }
    }
  }, [cartItems, isInCart, productItem.id]);
  const handleIncrement = async product => {
    setQuantity(prev => prev + 1);
    dispatch(addToCart({ id: product.id }));
    if (isAuth) {
      await addToCartUserDBProduct(userId, productItem.id);
    } else {
      addToCartLocalStorage(product);
    }
  };

  const handleDecrement = async prod => {
    setQuantity(prev => prev - 1);
    dispatch(removeFromCart({ id: prod.id }));
    if (isAuth) {
      await removeFromCartUserDBProduct(userId, productItem.id);
    } else {
      removeCartItemFromLocalStorage(prod);
    }
  };

  if (!isInCart) {
    return null;
  }

  return (
    <Box sx={{ position: 'relative', mb: '14px' }}>
      <RemoveCircleIcon
        sx={{
          position: 'absolute',
          top: '5px',
          left: '-6px',
          fontSize: '18px',
          color: '#d34747',
          cursor: 'pointer'
        }}
        onClick={() => {
          if (quantity === 1) {
            return;
          }
          handleDecrement(productItem);
        }}
      />
      <Box
        sx={{
          padding: '4px 20px',
          borderRadius: '50px',
          backgroundColor: '#d6eaf5',
          // height:'32px',
          textAlign: 'center',
          fontFamily: '"Roboto", "san-serif"',
          userSelect: 'none'
        }}
      >
        {quantity}
      </Box>
      <AddCircleIcon
        onClick={() => {
          if (quantity >= productItem?.quantity) {
            return;
          }
          handleIncrement(productItem);
        }}
        sx={{
          position: 'absolute',
          top: '5px',
          right: '-6px',
          fontSize: '18px',
          color: '#2db496',
          cursor: 'pointer'
        }}
      />
    </Box>
  );
};
