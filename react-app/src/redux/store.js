import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './todosSlice';

const store = configureStore({
  reducer: {
    posts: postsSlice
  }
});

export default store;
