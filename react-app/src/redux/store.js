import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './orderProcessSlice';
import productsSlice from './productsSlice';
import modalSlice from './modalSlice';

const store = configureStore({
  reducer: {
    products: productsSlice,
    order: orderReducer,
    openModal: modalSlice
  }
});

export default store;
