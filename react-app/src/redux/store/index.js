import { configureStore } from '@reduxjs/toolkit';
import orderReducer from '../slice/orderProcessSlice';
import productsSlice from '../slice/productsSlice';
import modalSlice from '../slice/modalSlice';
import numPageSlice from '../slice/numPageSlice';
import itemCardsSlice from '../slice/cartItems';
import favouriteItemsSlice from '../slice/favouriteItems';
import tokenSlise from '../slice/isToken';

const store = configureStore({
  reducer: {
    products: productsSlice,
    order: orderReducer,
    openModal: modalSlice,
    numPage: numPageSlice,
    favouriteItems: favouriteItemsSlice,
    itemCards: itemCardsSlice,
    isToken: tokenSlise
  }
});

export default store;
