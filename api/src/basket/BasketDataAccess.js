import mongoose from 'mongoose';
import BacketDB from './BacketModel.js';

export const getBacketById = async backetId => {
  try {
    const objectIdbacket = new mongoose.Types.ObjectId(backetId);
    return await BacketDB.findOne({ _id: objectIdbacket });
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getBacketByUser = async userId => {
  try {
    const objectIdUser = new mongoose.Types.ObjectId(userId);
    return await BacketDB.findOne({ user: objectIdUser });
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getAllBackets = async () => {
  try {
    return await BacketDB.find();
  } catch (e) {
    throw new Error(e.message);
  }
};

export const createBacket = async backetData => {
  try {
    return await BacketDB.create(backetData);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const updateBacket = async (backetId, backetData) => {
  try {
    return await BacketDB.findByIdAndUpdate(backetId, backetData, {
      new: true,
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

export const deleteBacket = async backetId => {
  try {
    return await BacketDB.findByIdAndDelete(backetId);
  } catch (e) {
    throw new Error(e.message);
  }
};
