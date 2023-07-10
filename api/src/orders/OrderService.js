import {
  getOrdersByUser,
  getAllOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} from './OrderDataAccess.js';
import { fillFields } from '../product/ProductService.js';
import { sendMailOrder } from '../utils/mail.js';

export const createOrderService = async orderData => {
  try {
    const productsData = await fillFields(orderData);
    const createdOrder = await createOrder({
      ...orderData,
      products: productsData,
    });
    const { email, products, totalPrice } = createdOrder;
    await sendMailOrder({ products, email, totalPrice });

    return createdOrder;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getOrdersService = async userId => {
  try {
    if (userId) {
      return await getOrdersByUser(userId);
    } else {
      return await getAllOrders();
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

export const modifyOrderService = async (orderId, orderData) => {
  try {
    if (!orderId) {
      throw new Error('ID was not set');
    }
    return await updateOrder(orderId, orderData);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const removeOrderService = async orderId => {
  try {
    if (!orderId) {
      throw new Error('ID was not set');
    }
    const order = await deleteOrder(orderId);
    if (!order) {
      throw new Error('ID was not found or already deleted');
    }
    return order;
  } catch (e) {
    throw new Error(e.message);
  }
};
