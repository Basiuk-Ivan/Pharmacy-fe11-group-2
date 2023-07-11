import {
  createOrderService,
  getOrdersService,
  modifyOrderService,
  removeOrderService,
} from './OrderService.js';

export const createOrders = async (req, res) => {
  try {
    const createdOrder = await createOrderService(req.body);
    res.json(createdOrder);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getAllOrder = async (req, res) => {
  try {
    const { user } = req.query;
    const orders = await getOrdersService(user);
    return res.json(orders);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await modifyOrderService(req.body.id, req.body);
    return res.json(updatedOrder);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await removeOrderService(req.params.id);
    return res.json(order);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const OrderController = {
  createOrders,
  getAllOrder,
  updateOrder,
  deleteOrder,
};
