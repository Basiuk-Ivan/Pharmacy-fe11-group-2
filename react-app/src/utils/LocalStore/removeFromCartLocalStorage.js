export const removeFromCartLocalStorage = productItem => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const updatedItems = cartItems.filter(item => item.id !== productItem.id);
  localStorage.setItem('cartItems', JSON.stringify(updatedItems));
};
