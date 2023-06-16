import { Router } from 'express';
import {OrderController} from './OrdersController.js';

export const orderRouter = new Router();
export const orderDefaultPath = '/api/favorite';

orderRouter.post('/', OrderController.createOrder);
orderRouter.get('/', OrderController.getAllOrder);
orderRouter.put('/', OrderController.updateOrder);
orderRouter.delete('/:id', OrderController.deleteOrder);