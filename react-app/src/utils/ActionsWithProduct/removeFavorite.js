export const removeFavorite = (favoriteItems, product) => {
  const newFavorites = favoriteItems.filter(item => item.id !== product.id);
  return newFavorites;
};
