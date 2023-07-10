import { Router } from 'express';
import { BacketController } from './BacketController.js';

export const backetRouter = new Router();
export const backetDefaultPath = '/api/backet';

backetRouter.post('/', BacketController.createBacket);
backetRouter.get('/', BacketController.getAllBacket);
backetRouter.put('/', BacketController.updateBacket);
backetRouter.delete('/:id', BacketController.deleteBacket);
