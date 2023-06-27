export const removeCartProductAllquantity = (cartItems, product) => {
  const { id } = product;
  const newCartArr = cartItems.filter(item => item.id !== id);

  return [...newCartArr];
};
