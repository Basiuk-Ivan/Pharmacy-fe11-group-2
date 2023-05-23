import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './todosSlice';

const store = configureStore({
  reducer: {
    products: productsSlice
  }
});

export default store;
