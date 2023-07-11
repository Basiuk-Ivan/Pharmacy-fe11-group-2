import mongoose from 'mongoose';
import ReviewDB from './ReviewModel.js';

export const getReviewById = async reviewId => {
  try {
    const review = await ReviewDB.findById(reviewId);
    return review;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getReviewsByProduct = async productId => {
  try {
    const objectIdProd = new mongoose.Types.ObjectId(productId);
    const reviews = await ReviewDB.find({ product: objectIdProd });
    return reviews;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getReviewsByUser = async userId => {
  try {
    const objectIdUser = new mongoose.Types.ObjectId(userId);
    const reviews = await ReviewDB.find({ user: objectIdUser });
    return reviews;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllReviews = async () => {
  try {
    const reviews = await ReviewDB.find();
    return reviews.reverse();
  } catch (error) {
    throw new Error(error.message);
  }
};
