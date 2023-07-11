import { Router } from 'express';
import { UserController } from './usersController.js';

export const userRouter = new Router();
export const userDefaultPath = '/api/users';

userRouter.post('/login', UserController.loginUser);
userRouter.post('/password', UserController.forgotPasswordUser);
userRouter.get('/', UserController.getUser);
userRouter.get('/:id', UserController.getUserByID);
userRouter.post('/:id', UserController.updateUser);
userRouter.post('/', UserController.createUser);
