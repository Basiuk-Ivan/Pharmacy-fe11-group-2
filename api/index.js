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
import {
  favoriteDefaultPath,
  favoriteRouter,
} from './src/favorite/FavoriteRouter.js';
import { backetDefaultPath, backetRouter } from './src/basket/BacketRouter.js';
import { orderDefaultPath, orderRouter } from './src/orders/OrdersRouter.js';
import { reviewDefaultPath, reviewRouter } from './src/review/ReviewRouter.js';
import {responseDefaultPath, responseRouter} from "./src/response/ResponseRouter.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.use(categoriesDefaultPath, categoryRouter);
app.use(productDefaultPath, productRouter);
app.use(userDefaultPath, userRouter);
app.use(favoriteDefaultPath, favoriteRouter);
app.use(backetDefaultPath, backetRouter);
app.use(orderDefaultPath, orderRouter);
app.use(reviewDefaultPath, reviewRouter)
app.use(responseDefaultPath, responseRouter);
