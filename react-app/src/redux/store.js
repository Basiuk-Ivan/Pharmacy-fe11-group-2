import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './todosSlice';
import cartReducer from './cartSlice.js';
const store = configureStore({
  reducer: {
    posts: postsSlice,
    cart: cartReducer
  }
});

export default store;
