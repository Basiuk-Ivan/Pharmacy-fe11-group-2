export const addToCartLocalStorage = productItem => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const updatedItems = [...cartItems, { id: productItem.id }];
  localStorage.setItem('cartItems', JSON.stringify(updatedItems));

  // localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // localStorage.setItem(`cartItem_${productItem.id}`, JSON.stringify({ isCart: true }));
};
