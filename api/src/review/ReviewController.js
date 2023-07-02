import ReviewDB from './ReviewModel.js';
import mongoose from 'mongoose';

export const createReview = async (req, res) => {
  try {
    const createdReview = await ReviewDB.create(req.body);
    res.json(createdReview);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getReview = async (req, res) => {
  try {
    let Reviews = [];
    const { product, user } = req.query;
    if (!!product) {
      const objectIdProd = new mongoose.Types.ObjectId(product);
      Reviews = await ReviewDB.find({ product: objectIdProd });
    } else {
      if (!!user) {
        const objectIdUser = new mongoose.Types.ObjectId(user);
        Reviews = await ReviewDB.find({ user: objectIdUser });
      } else {
        Reviews = await ReviewDB.find();
      }
    }

    return res.json(Reviews.reverse());
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const updateReview = async (req, res) => {
  try {
    if (!req.body.id) {
      throw new Error('ID не знайдено');
    }
    const updatedReview = await ReviewDB.findByIdAndUpdate(
      req.body.id,
      req.body,
      { new: true }
    );
    return res.json(updatedReview);
  } catch (e) {
    res.status(500).json(e.message);
  }
};
export const deleteReview = async (req, res) => {
  try {
    if (!req.params.id) {
      throw new Error('ID не знайдено');
    }
    const Review = await ReviewDB.findByIdAndDelete(req.params.id);
    if (!Review) {
      res.status(404).json('ID не знайдено чи вже видалено');
    } else {
      return res.json(Review);
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const ReviewController = {
  createReview,
  getReview,
  updateReview,
  deleteReview,
};
