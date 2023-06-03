import { removeItem } from '../redux/slice/cartItems';

export const removeFromCartLocalStor = (productItem, dispatch) => {
  dispatch(removeItem(productItem.id));

  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const updatedItems = cartItems.filter(item => item.id !== productItem.id);

  localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  localStorage.removeItem(`cartItem_${productItem.id}`);
};
