import {
  getFavorite,
  addFavorite,
  modifyFavorite,
  removeFavorite,
} from './FavoriteService.js';

export const createFavorite = async (req, res) => {
  try {
    const createdFavorite = await addFavorite(req.body);
    res.json(createdFavorite);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getAllFavorite = async (req, res) => {
  try {
    const { user } = req.query;
    const favorites = await getFavorite(user);
    return res.json(favorites);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const updateFavorite = async (req, res) => {
  try {
    const updatedFavorite = await modifyFavorite(req.body.id, req.body);
    return res.json(updatedFavorite);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const deleteFavorite = async (req, res) => {
  try {
    const favorite = await removeFavorite(req.params.id);
    return res.json(favorite);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const FavoriteController = {
  createFavorite,
  getAllFavorite,
  updateFavorite,
  deleteFavorite,
};
