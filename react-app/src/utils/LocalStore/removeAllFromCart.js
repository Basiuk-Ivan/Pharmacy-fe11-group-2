export const removeAllFromCart = () => {
  localStorage.setItem('cartItems', JSON.stringify([]));
};
