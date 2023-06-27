const addCartProduct = (cartItems, product) => {
  const mergedProducts = [...cartItems];
  const cartItemToAdd = { id: product.id, quantity: 1 };
  const foundIndex = mergedProducts.findIndex(item => item.id === cartItemToAdd.id);
  if (foundIndex !== -1) {
    mergedProducts[foundIndex].quantity += cartItemToAdd.quantity;
  } else {
    mergedProducts.push({ ...cartItemToAdd });
  }
  return mergedProducts;
};

const removeCartProduct = (cartItems, product) => {
  const { id } = product;
  const existingCartItemIndex = cartItems.findIndex(item => item.id === id);
  const updatedCart = [...cartItems];
  if (updatedCart[existingCartItemIndex].quantity > 1) {
    updatedCart[existingCartItemIndex].quantity -= 1;
    return updatedCart;
  }
  const newCartArr = cartItems.filter(item => item.id !== id);
  return [...newCartArr];
};
