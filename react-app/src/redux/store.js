import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './orderProcessSlice';
import productsSlice from './productsSlice';
import modalSlice from './modalSlice';
import numPageSlice from './numPageSlice';
import itemCardsSlice from './cartSlice';

const store = configureStore({
  reducer: {
    products: productsSlice,
    order: orderReducer,
    openModal: modalSlice,
    numPage: numPageSlice,
    itemCards: itemCardsSlice
  }
});

export default store;
