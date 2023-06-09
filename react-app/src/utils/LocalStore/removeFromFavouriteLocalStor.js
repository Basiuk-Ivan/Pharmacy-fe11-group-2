export const removeFromFavouriteLocalStor = productItem => {
  localStorage.removeItem(`favouriteItem_${productItem.id}`);

  const favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];
  const updatedItems = favouriteItems.filter(item => item.id !== productItem.id);

  localStorage.setItem('favouriteItems', JSON.stringify(updatedItems));
};
