export const roundRating = productItem => {
  const roundedValue = Math.round(Number(productItem.ratingTotal) / Number(productItem.ratingClick));
  return roundedValue;
};
