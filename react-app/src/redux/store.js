import { configureStore } from '@reduxjs/toolkit';
import orderProcessSlice from './orderProcessSlice';
import productsSlice from './todosSlice';
import orderReducer from './orderProcessSlice';

const store = configureStore({
  reducer: {
    products: productsSlice,
    order: orderReducer,
  }
});

export default store;
