import ReviewDB from './ReviewModel.js';
import {
  getReviewsByProduct,
  getReviewsByUser,
  getAllReviews,
} from './ReviewDataAccess.js';

export const createReview = async reviewData => {
  try {
    const createdReview = await ReviewDB.create(reviewData);
    return createdReview;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateReview = async (reviewId, updatedFields) => {
  try {
    const updatedReview = await ReviewDB.findByIdAndUpdate(
      reviewId,
      updatedFields,
      { new: true }
    );
    return updatedReview;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteReview = async reviewId => {
  try {
    const deletedReview = await ReviewDB.findByIdAndDelete(reviewId);
    return deletedReview;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const ReviewService = {
  createReview,
  updateReview,
  deleteReview,
  getReviewsByProduct,
  getReviewsByUser,
  getAllReviews,
};
