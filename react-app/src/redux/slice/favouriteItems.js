import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favouriteItems: JSON.parse(localStorage.getItem('favouriteItems')) || [],
  isOpened: false,
  singleFavoriteItemDeleted: JSON.parse(localStorage.getItem('singleFavoriteItemDeleted')) || ''
};

const favouriteItems = createSlice({
  name: 'favouriteItems',
  initialState,
  reducers: {
    addToFavouriteItems: (state, action) => {
      state.favouriteItems.push({ id: action.payload });
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
      state.singleFavoriteItemDeleted = action.payload;
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

export const {
  addToFavouriteItems,
  // deleteSingleFavoriteItem,
  deleteFromFavouriteItems,
  openModal,
  closeModal
} = favouriteItems.actions;
