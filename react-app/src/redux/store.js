import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './orderProcessSlice';
import productsSlice from './productsSlice';
import modalSlice from './modalSlice';
import numPageSlice from './numPageSlice';

const store = configureStore({
  reducer: {
    products: productsSlice,
    order: orderReducer,
    openModal: modalSlice,
    numPage: numPageSlice
  }
});

export default store;
