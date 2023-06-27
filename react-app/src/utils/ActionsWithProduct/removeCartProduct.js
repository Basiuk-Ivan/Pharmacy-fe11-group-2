export const removeCartProduct = (cartItems, product) => {
  const { id } = product;
  const existingCartItemIndex = cartItems.findIndex(item => item.id === id);
  const updatedCart = [...cartItems];
  if (updatedCart[existingCartItemIndex].quantity > 1) {
    const updatedItem = {
      ...updatedCart[existingCartItemIndex],
      quantity: updatedCart[existingCartItemIndex].quantity - 1
    };
    updatedCart[existingCartItemIndex] = updatedItem;

    return updatedCart;
  }
  const newCartArr = cartItems.filter(item => item.id !== id);
  return [...newCartArr];
};
