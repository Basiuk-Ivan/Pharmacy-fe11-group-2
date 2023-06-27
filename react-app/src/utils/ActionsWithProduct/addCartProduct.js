export const addCartProduct = (cartItems, product) => {
  const mergedProducts = [...cartItems];
  const cartItemToAdd = { id: product.id, quantity: 1 };
  const foundIndex = mergedProducts.findIndex(item => item.id === cartItemToAdd.id);
  if (foundIndex !== -1) {
    const updatedItem = {
      ...mergedProducts[foundIndex],
      quantity: mergedProducts[foundIndex].quantity + 1
    };
    mergedProducts[foundIndex] = updatedItem;
  } else {
    mergedProducts.push(cartItemToAdd);
  }
  return mergedProducts;
};
