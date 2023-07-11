import { Router } from 'express';
import { OrderController } from './OrdersController.js';

export const orderRouter = new Router();
export const orderDefaultPath = '/api/order';

orderRouter.post('/', OrderController.createOrders);
orderRouter.get('/', OrderController.getAllOrder);
orderRouter.put('/', OrderController.updateOrder);
orderRouter.delete('/:id', OrderController.deleteOrder);
