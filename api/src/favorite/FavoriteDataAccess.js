import mongoose from 'mongoose';
import FavoriteDB from './FavoriteModel.js';

export const getFavoriteByUser = async userId => {
  try {
    const objectIdUser = new mongoose.Types.ObjectId(userId);
    return await FavoriteDB.findOne({ user: objectIdUser });
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getAllFavorites = async () => {
  try {
    return await FavoriteDB.find();
  } catch (e) {
    throw new Error(e.message);
  }
};

export const createFavorite = async favoriteData => {
  try {
    return await FavoriteDB.create(favoriteData);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const updateFavorite = async (favoriteId, favoriteData) => {
  try {
    return await FavoriteDB.findByIdAndUpdate(favoriteId, favoriteData, {
      new: true,
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

export const deleteFavorite = async favoriteId => {
  try {
    return await FavoriteDB.findByIdAndDelete(favoriteId);
  } catch (e) {
    throw new Error(e.message);
  }
};
