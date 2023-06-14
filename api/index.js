import express from 'express';
import cors from 'cors';
import {
  productDefaultPath,
  productRouter,
} from './src/product/ProductRouter.js';
import {
  categoriesDefaultPath,
  categoryRouter,
} from './src/categories/CategoriesRouter.js';
import { userDefaultPath, userRouter } from './src/users/usersRouter.js';

export const app = express();

app.use(cors());
app.use(express.json());

app.use(categoriesDefaultPath, categoryRouter);
app.use(productDefaultPath, productRouter);
app.use(userDefaultPath, userRouter);
