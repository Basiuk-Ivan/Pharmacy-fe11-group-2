export const addAllCartProduct = (cartItems, cartProductsToAdd) => {
  const mergedProducts = [...cartItems];
  cartProductsToAdd.forEach(itemToAdd => {
    const foundIndex = mergedProducts.findIndex(item => item.id === itemToAdd.id);
    if (foundIndex !== -1) {
      const updatedItem = {
        ...mergedProducts[foundIndex],
        quantity: mergedProducts[foundIndex].quantity + 1
      };
      mergedProducts[foundIndex] = updatedItem;
    } else {
      mergedProducts.push(itemToAdd);
    }
  });

  return mergedProducts;
};
