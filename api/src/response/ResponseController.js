import {
  createResponseService,
  getResponseService,
  updateResponseService,
  deleteResponseService,
} from './ResponseService.js';

export const createResponse = async (req, res) => {
  try {
    const createdResponse = await createResponseService(req.body);
    res.json(createdResponse);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getResponse = async (req, res) => {
  try {
    const { page, limit, respondId } = req.query;
    const response = await getResponseService(page, limit, respondId);
    res.json(response);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const updateResponse = async (req, res) => {
  try {
    if (!req.body.id) {
      throw new Error('ID не знайдено');
    }
    const updatedResponse = await updateResponseService(req.body.id, req.body);
    res.json(updatedResponse);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const deleteResponse = async (req, res) => {
  try {
    if (!req.params.id) {
      throw new Error('ID не знайдено');
    }
    const deletedResponse = await deleteResponseService(req.params.id);
    if (!deletedResponse) {
      res.status(404).json('ID не знайдено чи вже видалено');
    } else {
      res.json(deletedResponse);
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const ResponseController = {
  createResponse,
  getResponse,
  updateResponse,
  deleteResponse,
};
