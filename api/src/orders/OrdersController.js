import OrderDB from './OrdersModel.js';
import ProductDB from '../product/ProductModel.js';
import mongoose from 'mongoose';
import { fillFields } from '../product/ProductController.js';
import { sendMailOrder } from '../utils/mail.js';

export const createOrder = async (req, res) => {
  try {
    const productsData = await fillFields(req.body);
    const createdOrder = await OrderDB.create({
      ...req.body,
      products: productsData,
    });
    const { email, products, totalPrice } = createdOrder;
    await sendMailOrder({ products, email, totalPrice });

    res.json(createdOrder);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getAllOrder = async (req, res) => {
  try {
    let Orders = [];
    const { user } = req.query;
    if (!!user) {
      const objectId = new mongoose.Types.ObjectId(user);
      Orders = await OrderDB.find({ user: objectId });
    } else {
      Orders = await OrderDB.find();
    }
    return res.json(Orders);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const updateOrder = async (req, res) => {
  try {
    if (!req.body.id) {
      throw new Error('ID was not set');
    }
    const updatedOrder = await OrderDB.findByIdAndUpdate(
      req.body.id,
      req.body,
      { new: true }
    );
    return res.json(updatedOrder);
  } catch (e) {
    res.status(500).json(e.message);
  }
};
export const deleteOrder = async (req, res) => {
  try {
    if (!req.params.id) {
      throw new Error('ID was not set');
    }
    const order = await OrderDB.findByIdAndDelete(req.params.id);
    if (!order) {
      res.status(404).json('ID was not founded or already deleted');
    } else {
      return res.json(order);
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const OrderController = {
  createOrder,
  getAllOrder,
  updateOrder,
  deleteOrder,
};
