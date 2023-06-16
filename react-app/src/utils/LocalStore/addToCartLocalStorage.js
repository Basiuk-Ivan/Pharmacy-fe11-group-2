export const addToCartLocalStorage = productItem => {
  const cartItem = { id: productItem.id, quantity: 1 };
  const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
  const existingCartItemIndex = existingCart.findIndex(item => item.id === cartItem.id);
  if (existingCartItemIndex !== -1) {
    const updatedCart = [...existingCart];
    updatedCart[existingCartItemIndex].quantity += 1;
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  } else {
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  }
};
