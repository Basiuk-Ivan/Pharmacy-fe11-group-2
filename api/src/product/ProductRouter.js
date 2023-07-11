import { Router } from 'express';
import validateSchema from '../utils/validation.js';
import { productValidateSchema } from './validationsSchema.js';

import { ProductController } from './ProductController.js';

export const productRouter = new Router();
export const productDefaultPath = '/api/product';

productRouter.post(
  '/',
  validateSchema(productValidateSchema),
  ProductController.createProductController
);
productRouter.get('/', ProductController.getAllProductController);
productRouter.get('/:id', ProductController.getOneProductController);
productRouter.put('/:id', ProductController.updateProductController);
productRouter.delete('/:id', ProductController.deleteProductController);
