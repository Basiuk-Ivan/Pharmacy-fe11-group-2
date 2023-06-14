// export const addToFavouriteLocalStorage = productItem => {
//   localStorage.setItem(`favouriteItem_${productItem.id}`, JSON.stringify({ isFavourite: true }));
//   const favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];

//   favouriteItems.push(productItem);
//   localStorage.setItem('favouriteItems', JSON.stringify(favouriteItems));
// };

export const addToFavouriteLocalStorage = productItem => {
  const favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];
  const updatedItems = [...favouriteItems, { id: productItem.id }];
  localStorage.setItem('favouriteItems', JSON.stringify(updatedItems));
};
