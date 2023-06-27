import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addToCart, removeFromCart } from '../../../../../../../redux/slice/cartItems';
import { addToCartLocalStorage } from '../../../../../../../utils/LocalStore/addToCartLocalStorage';
import { removeCartItemFromLocalStorage } from '../../../../../../../utils/LocalStore/removeCartItemFromLocalStorage';
import { addCartProduct } from '../../../../../../../utils/ActionsWithProduct/addCartProduct';
import { removeCartProduct } from '../../../../../../../utils/ActionsWithProduct/removeCartProduct';
import { putProductsToCartDB } from '../../../../../../../utils/ActionsWithProduct/putProductsToCartDB';

export const QuantityControl = ({ productItem, isInCart }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user.isAuth);
  const userId = useSelector(state => state.user.id);
  const cartItems = useSelector(state => state.itemCards.items);
  const cartStoreId = useSelector(state => state.user.cartStoreId);

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
      const newProducts = addCartProduct(cartItems, product);
      await putProductsToCartDB(cartStoreId, newProducts);
    } else {
      addToCartLocalStorage(product);
    }
  };

  const handleDecrement = async product => {
    setQuantity(prev => prev - 1);
    dispatch(removeFromCart({ id: product.id }));
    if (isAuth) {
      const newProducts = removeCartProduct(cartItems, product);
      await putProductsToCartDB(cartStoreId, newProducts);
    } else {
      removeCartItemFromLocalStorage(product);
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
