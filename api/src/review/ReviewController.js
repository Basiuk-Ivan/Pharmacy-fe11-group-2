import {
  getReviewById,
  getReviewsByProduct,
  getReviewsByUser,
  getAllReviews,
} from './ReviewDataAccess.js';

import { ReviewService } from './ReviewService.js';

export const createReview = async (req, res) => {
  try {
    const createdReview = await ReviewService.createReview(req.body);
    res.json(createdReview);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getReview = async (req, res) => {
  try {
    const { product, user, respondId } = req.query;

    if (!!respondId) {
      const respond = await getReviewById(respondId);
      return res.json(respond);
    } else if (!!product) {
      const reviews = await getReviewsByProduct(product);
      return res.json(reviews);
    } else if (!!user) {
      const reviews = await getReviewsByUser(user);
      return res.json(reviews);
    } else {
      const reviews = await getAllReviews();
      return res.json(reviews);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateReview = async (req, res) => {
  try {
    if (!req.body.id) {
      throw new Error('ID не знайдено');
    }
    const updatedReview = await ReviewService.updateReview(
      req.body.id,
      req.body
    );
    console.log('updatedReview:', updatedReview);
    return res.json(updatedReview);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteReview = async (req, res) => {
  try {
    if (!req.params.id) {
      throw new Error('ID не знайдено');
    }
    const deletedReview = await ReviewService.deleteReview(req.params.id);
    if (!deletedReview) {
      res.status(404).json('ID не знайдено чи вже видалено');
    } else {
      return res.json(deletedReview);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const ReviewController = {
  createReview,
  getReview,
  updateReview,
  deleteReview,
};
