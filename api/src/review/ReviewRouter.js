import { Router } from 'express';
import {ReviewController} from './ReviewController.js';

export const reviewRouter = new Router();
export const reviewDefaultPath = '/api/review';

reviewRouter.post('/', ReviewController.createReview);
reviewRouter.get('/', ReviewController.getReview);
reviewRouter.put('/', ReviewController.updateReview);
reviewRouter.delete('/:id', ReviewController.deleteReview);