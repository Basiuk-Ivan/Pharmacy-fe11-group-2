import { Router } from 'express';
import validateSchema from '../utils/validation.js';
import { productValidateSchema } from './validationsSchema.js';

import { ProductController } from './ProductController.js';

export const productRouter = new Router();
export const productDefaultPath = '/api/product';

productRouter.post('/', validateSchema(productValidateSchema), ProductController.createProduct);
productRouter.get('/', ProductController.getAllProduct);
productRouter.put('/', ProductController.updateProduct);
productRouter.delete('/:id', ProductController.deleteProduct);
