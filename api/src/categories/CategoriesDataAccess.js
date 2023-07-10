import CategoryDB from './CategoriesModel.js';

export const getCategoriesByParentId = async parentId => {
  try {
    return await CategoryDB.find({ parentId: parentId });
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getAllCategories = async () => {
  try {
    return await CategoryDB.find();
  } catch (e) {
    throw new Error(e.message);
  }
};

export const createCategory = async categoryData => {
  try {
    return await CategoryDB.create(categoryData);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const updateCategory = async (categoryId, categoryData) => {
  try {
    return await CategoryDB.findByIdAndUpdate(categoryId, categoryData, {
      new: true,
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

export const deleteCategory = async categoryId => {
  try {
    return await CategoryDB.findByIdAndDelete(categoryId);
  } catch (e) {
    throw new Error(e.message);
  }
};
