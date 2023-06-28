export const addFavorite = (favoriteItems, product) => {
  const newFavorites = [...favoriteItems];
  newFavorites.push({ id: product.id });
  return newFavorites;
};
