import FavoriteDB from './FavoriteModel.js';
import mongoose from 'mongoose';

export const createFavorite = async (req, res) => {
  try {
    const createdFavorite = await FavoriteDB.create(req.body);
    res.json(createdFavorite);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getAllFavorite = async (req, res) => {
  try {
    let favorites = {};
    const { user } = req.query;
    if (!!user) {
      const objectId = new mongoose.Types.ObjectId(user);
      favorites = await FavoriteDB.findOne({ user: objectId });
    } else {
      favorites = await FavoriteDB.find();
    }
    return res.json(favorites);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const updateFavorite = async (req, res) => {
  try {
    if (!req.body.id) {
      throw new Error('ID was not set');
    }
    const updatedFavorite = await FavoriteDB.findByIdAndUpdate(
      req.body.id,
      req.body,
      { new: true }
    );
    return res.json(updatedFavorite);
  } catch (e) {
    res.status(500).json(e.message);
  }
};
export const deleteFavorite = async (req, res) => {
  try {
    if (!req.params.id) {
      throw new Error('ID was not set');
    }
    const favorite = await FavoriteDB.findByIdAndDelete(req.params.id);
    if (!favorite) {
      res.status(404).json('ID was not founded or already deleted');
    } else {
      return res.json(favorite);
    }
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
