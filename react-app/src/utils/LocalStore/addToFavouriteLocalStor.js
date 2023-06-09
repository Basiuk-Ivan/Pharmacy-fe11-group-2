export const addToFavouriteLocalStor = productItem => {
  localStorage.setItem(`favouriteItem_${productItem.id}`, JSON.stringify({ isFavourite: true }));
  const favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];

  favouriteItems.push(productItem);
  localStorage.setItem('favouriteItems', JSON.stringify(favouriteItems));
};
