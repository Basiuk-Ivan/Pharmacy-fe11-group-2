export const removeCartItemFromLocalStorage = productItem => {
  const { id } = productItem;
  const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
  const existingCartItemIndex = existingCart.findIndex(item => item.id === id);
  const updatedCart = [...existingCart];
  if (updatedCart[existingCartItemIndex].quantity > 1) {
    updatedCart[existingCartItemIndex].quantity -= 1;
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  } else {
    const newArr = existingCart.filter(item => item.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(newArr));
  }
};
