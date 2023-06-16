import { Router } from 'express';
import { UserController } from './usersController.js';

export const userRouter = new Router();
export const userDefaultPath = '/api/users';

userRouter.get('/', UserController.getAll);
userRouter.get('/:id', UserController.getByID);
userRouter.post('/:id', UserController.update);
userRouter.post('/create', UserController.create);
userRouter.post('/login', UserController.login);
