import mongoose from 'mongoose';
import OrderDB from './OrdersModel.js';

export const getOrdersByUser = async userId => {
  try {
    const objectIdUser = new mongoose.Types.ObjectId(userId);
    return await OrderDB.find({ user: objectIdUser });
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getAllOrders = async () => {
  try {
    return await OrderDB.find();
  } catch (e) {
    throw new Error(e.message);
  }
};

export const createOrder = async orderData => {
  try {
    return await OrderDB.create(orderData);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const updateOrder = async (orderId, orderData) => {
  try {
    return await OrderDB.findByIdAndUpdate(orderId, orderData, { new: true });
  } catch (e) {
    throw new Error(e.message);
  }
};

export const deleteOrder = async orderId => {
  try {
    return await OrderDB.findByIdAndDelete(orderId);
  } catch (e) {
    throw new Error(e.message);
  }
};
