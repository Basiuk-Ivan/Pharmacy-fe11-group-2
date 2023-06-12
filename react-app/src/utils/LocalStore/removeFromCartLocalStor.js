import { removeItem } from '../../redux/slice/cartItems';

export const removeFromCartLocalStor = (productItem, dispatch, arg) => {
  if (arg === 'all') {
    dispatch(removeItem('all'));
  } else {
    dispatch(removeItem(productItem.id));
  }

  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const updatedItems = cartItems.filter(item => item.id !== productItem.id);

  localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  localStorage.removeItem(`cartItem_${productItem.id}`);
};
