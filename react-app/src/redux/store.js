import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import modalSlice from './modalSlice';

const store = configureStore({
  reducer: {
    products: productsSlice,
    openModal: modalSlice
  }
});

export default store;
