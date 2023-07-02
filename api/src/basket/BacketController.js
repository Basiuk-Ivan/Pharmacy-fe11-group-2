import BacketDB from './BacketModel.js';
import mongoose from 'mongoose';

export const createBacket = async (req, res) => {
  try {
    const createdBacket = await BacketDB.create(req.body);
    res.json(createdBacket);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getAllBacket = async (req, res) => {
  try {
    let backets = {};
    const { backet, user } = req.query;
    if (!!backet) {
      const objectIdbacket = new mongoose.Types.ObjectId(backet);
      backets = await BacketDB.findOne({ _id: objectIdbacket });
    } else {
      if (!!user) {
        const objectIdUser = new mongoose.Types.ObjectId(user);
        backets = await BacketDB.findOne({ user: objectIdUser });
      } else {
        backets = await BacketDB.find();
      }
    }
    return res.json(backets);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const updateBacket = async (req, res) => {
  try {
    if (!req.body.id) {
      throw new Error('ID was not set');
    }
    const updatedBacket = await BacketDB.findByIdAndUpdate(
      req.body.id,
      req.body,
      { new: true }
    );
    return res.json(updatedBacket);
  } catch (e) {
    res.status(500).json(e.message);
  }
};
export const deleteBacket = async (req, res) => {
  try {
    if (!req.params.id) {
      throw new Error('ID was not set');
    }
    const backet = await BacketDB.findByIdAndDelete(req.params.id);
    if (!backet) {
      res.status(404).json('ID was not founded or already deleted');
    } else {
      return res.json(backet);
    }
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
