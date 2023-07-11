import {
  getCategories,
  addCategory,
  modifyCategory,
  removeCategory,
} from './CategoriesService.js';

export const createCategory = async (req, res) => {
  try {
    const createdCategory = await addCategory(req.body);
    res.json(createdCategory);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getAllCategory = async (req, res) => {
  try {
    const { category } = req.query;
    const categories = await getCategories(category);
    return res.json(categories);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await modifyCategory(req.body.id, req.body);
    return res.json(updatedCategory);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await removeCategory(req.params.id);
    return res.json(category);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const CategoriesController = {
  createCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
};
