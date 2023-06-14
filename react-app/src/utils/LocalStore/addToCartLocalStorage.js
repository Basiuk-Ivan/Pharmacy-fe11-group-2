export const addToCartLocalStorage = productItem => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.push(productItem);

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  localStorage.setItem(`cartItem_${productItem.id}`, JSON.stringify({ isCart: true }));
};
