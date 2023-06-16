export const roundPrice = productItem => {
  const result = productItem.price * ((100 - productItem.discount) / 100);
  const roundedPrice = Math.round(result);
  return roundedPrice;
};
