import {
  getBacket,
  addBacket,
  modifyBacket,
  removeBacket,
} from './BasketService.js';

export const createBacket = async (req, res) => {
  try {
    const createdBacket = await addBacket(req.body);
    res.json(createdBacket);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getAllBacket = async (req, res) => {
  try {
    const { backet, user } = req.query;
    const backets = await getBacket(backet, user);
    return res.json(backets);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const updateBacket = async (req, res) => {
  try {
    const updatedBacket = await modifyBacket(req.body.id, req.body);
    return res.json(updatedBacket);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const deleteBacket = async (req, res) => {
  try {
    const backet = await removeBacket(req.params.id);
    return res.json(backet);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const BacketController = {
  createBacket,
  getAllBacket,
  updateBacket,
  deleteBacket,
};
