import {
  getCategoriesByParentId,
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from './CategoriesDataAccess.js';

export const getCategories = async parentId => {
  try {
    if (parentId) {
      return await getCategoriesByParentId(parentId);
    } else {
      return await getAllCategories();
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

export const addCategory = async categoryData => {
  try {
    return await createCategory(categoryData);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const modifyCategory = async (categoryId, categoryData) => {
  try {
    if (!categoryId) {
      throw new Error('ID was not set');
    }
    return await updateCategory(categoryId, categoryData);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const removeCategory = async categoryId => {
  try {
    if (!categoryId) {
      throw new Error('ID was not set');
    }
    const category = await deleteCategory(categoryId);
    if (!category) {
      throw new Error('ID was not found or already deleted');
    }
    return category;
  } catch (e) {
    throw new Error(e.message);
  }
};
