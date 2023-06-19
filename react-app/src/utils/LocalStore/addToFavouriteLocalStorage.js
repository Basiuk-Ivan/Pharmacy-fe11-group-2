export const addToFavouriteLocalStorage = productItem => {
  const favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];
  const updatedItems = [...favouriteItems, { id: productItem.id }];
  localStorage.setItem('favouriteItems', JSON.stringify(updatedItems));
};
