import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favouriteItems: JSON.parse(localStorage.getItem('favouriteItems')) || [],
  isOpened: false
};

const favouriteItems = createSlice({
  name: 'favouriteItems',
  initialState,
  reducers: {
    addToFavouriteItems: (state, action) => {
      state.favouriteItems.push(action.payload);
    },
    // eslint-disable-next-line consistent-return
    deleteFromFavouriteItems: (state, action) => {
      if (action.payload === 'all') {
        return {
          ...state,
          favouriteItems: []
        };
      }
      state.favouriteItems = state.favouriteItems.filter(item => item.id !== action.payload);
    },
    openModal: state => {
      state.isOpened = true;
    },
    closeModal: state => {
      state.isOpened = false;
    }
  }
});

export default favouriteItems.reducer;

// eslint-disable-next-line operator-linebreak
export const { addToFavouriteItems, deleteFromFavouriteItems, openModal, closeModal } =
  favouriteItems.actions;
