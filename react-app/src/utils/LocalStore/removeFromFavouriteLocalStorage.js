export const removeFromFavouriteLocalStorage = productItem => {
  const favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];
  const updatedItems = favouriteItems.filter(item => item.id !== productItem.id);

  localStorage.setItem('favouriteItems', JSON.stringify(updatedItems));
};
