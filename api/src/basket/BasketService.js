import {
  getBacketById,
  getBacketByUser,
  getAllBackets,
  createBacket,
  updateBacket,
  deleteBacket,
} from './BasketDataAccess.js';

export const getBacket = async (backetId, userId) => {
  try {
    if (backetId) {
      return await getBacketById(backetId);
    } else if (userId) {
      return await getBacketByUser(userId);
    } else {
      return await getAllBackets();
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

export const addBacket = async backetData => {
  try {
    return await createBacket(backetData);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const modifyBacket = async (backetId, backetData) => {
  try {
    if (!backetId) {
      throw new Error('ID was not set');
    }
    return await updateBacket(backetId, backetData);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const removeBacket = async backetId => {
  try {
    if (!backetId) {
      throw new Error('ID was not set');
    }
    const backet = await deleteBacket(backetId);
    if (!backet) {
      throw new Error('ID was not found or already deleted');
    }
    return backet;
  } catch (e) {
    throw new Error(e.message);
  }
};
