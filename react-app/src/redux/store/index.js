import { configureStore } from '@reduxjs/toolkit';
import orderReducer from '../slice/orderProcessSlice';
import productsSlice from '../slice/productsSlice';
import modalSlice from '../slice/modalSlice';
import numPageSlice from '../slice/numPageSlice';
import itemCardsSlice from '../slice/cartItems';
import favouriteItemsSlice from '../slice/favouriteItems';
import filterBaseSlice from '../slice/filterBaseSlice';
import tokenSlise from '../slice/isToken';
import userSlice from "../slice/userSlice.js";

const store = configureStore({
  reducer: {
    products: productsSlice,
    order: orderReducer,
    modalSlice,
    numPage: numPageSlice,
    favouriteItems: favouriteItemsSlice,
    filterBase: filterBaseSlice,
    itemCards: itemCardsSlice,
    user: userSlice,
    isToken: tokenSlise
  }
});

export default store;
