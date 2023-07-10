import {
  getFavoriteByUser,
  getAllFavorites,
  createFavorite,
  updateFavorite,
  deleteFavorite,
} from './FavoriteDataAccess.js';

export const getFavorite = async userId => {
  try {
    if (userId) {
      return await getFavoriteByUser(userId);
    } else {
      return await getAllFavorites();
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

export const addFavorite = async favoriteData => {
  try {
    return await createFavorite(favoriteData);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const modifyFavorite = async (favoriteId, favoriteData) => {
  try {
    if (!favoriteId) {
      throw new Error('ID was not set');
    }
    return await updateFavorite(favoriteId, favoriteData);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const removeFavorite = async favoriteId => {
  try {
    if (!favoriteId) {
      throw new Error('ID was not set');
    }
    const favorite = await deleteFavorite(favoriteId);
    if (!favorite) {
      throw new Error('ID was not found or already deleted');
    }
    return favorite;
  } catch (e) {
    throw new Error(e.message);
  }
};
