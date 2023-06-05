import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favouriteItems: JSON.parse(localStorage.getItem('favouriteItems')) || []
};

const favouriteItems = createSlice({
  name: 'favouriteItems',
  initialState,
  reducers: {
    addToFavouriteItems: (state, action) => {
      state.favouriteItems.push(action.payload);
    },
    deleteFromFavouriteItems: (state, action) => {
      if (action.payload === 'all') {
        return {
          ...state,
          favouriteItems: []
        };
      }
      state.favouriteItems = state.favouriteItems.filter(item => item.id !== action.payload);
    }
  }
});

export default favouriteItems.reducer;

export const { addToFavouriteItems, deleteFromFavouriteItems } = favouriteItems.actions;
