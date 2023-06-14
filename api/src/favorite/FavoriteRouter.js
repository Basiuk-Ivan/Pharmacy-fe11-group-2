import { Router } from 'express';
import {FavoriteController} from './FavoriteController.js';

export const favoriteRouter = new Router();
export const favoriteDefaultPath = '/api/favorite';

favoriteRouter.post('/', FavoriteController.createFavorite);
favoriteRouter.get('/', FavoriteController.getAllFavorite);
favoriteRouter.put('/', FavoriteController.updateFavorite);
favoriteRouter.delete('/:id', FavoriteController.deleteFavorite);