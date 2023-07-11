import { Router } from 'express';
import validateSchema from '../utils/validation.js';
import { categoriesValidateSchema } from './validationsSchema.js';

import { CategoriesController } from './CategoriesController.js';

export const categoryRouter = new Router();
export const categoriesDefaultPath = '/api/categories';

categoryRouter.post(
  '/',
  validateSchema(categoriesValidateSchema),
  CategoriesController.createCategory
);
categoryRouter.get('/', CategoriesController.getAllCategory);
categoryRouter.put('/', CategoriesController.updateCategory);
categoryRouter.delete('/:id', CategoriesController.deleteCategory);
