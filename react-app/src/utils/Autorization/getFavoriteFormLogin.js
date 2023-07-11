import { addToFavouriteItems, deleteFromFavouriteItems } from '../../redux/slice/favouriteItems';
import { setFavoriteStoreId } from '../../redux/slice/userSlice';
import { sendRequest } from '../../tools/Axios/sendRequest';

export const getFavoriteFromLogin = async (_id, dispatch) => {
  const favoriteURL = `${process.env.VITE_API_URL}/api/favorite?user=${_id}`;
  const favoriteResponse = await sendRequest(favoriteURL);
  const favoriteProducts = favoriteResponse.data.products;
  const favouriteItemsFromLS = JSON.parse(localStorage.getItem('favouriteItems')) || [];
  const favorites = favouriteItemsFromLS.map(item => item.id);
  const newFavorites = [...new Set([...favoriteProducts, ...favorites])];

  dispatch(setFavoriteStoreId(favoriteResponse.data.id));
  const newFavoriteData = { id: favoriteResponse.data.id, products: [...newFavorites] };

  const favoriteULRForPUT = `${process.env.VITE_API_URL}/api/favorite`;
  const favoritePUTResponse = await sendRequest(favoriteULRForPUT, 'PUT', newFavoriteData);
  window.localStorage.removeItem('favouriteItems');
  dispatch(deleteFromFavouriteItems('all'));
  newFavorites.forEach(product => {
    dispatch(addToFavouriteItems(product));
  });
};
