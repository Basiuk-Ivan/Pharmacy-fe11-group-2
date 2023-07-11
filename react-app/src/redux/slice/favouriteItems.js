import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favouriteItems: JSON.parse(localStorage.getItem('favouriteItems')) || [],
  isOpenedModalRemoveAll: false,
  isOpenedModalAddtoCart: false
};

const favouriteItems = createSlice({
  name: 'favouriteItems',
  initialState,
  reducers: {
    addToFavouriteItems: (state, action) => {
      state.favouriteItems.push({ id: action.payload });
    },

    deleteFromFavouriteItems: (state, action) => {
      if (action.payload === 'all') {
        return {
          ...state,
          favouriteItems: []
        };
      }
      state.favouriteItems = state.favouriteItems.filter(item => item.id !== action.payload);
    },
    openModalRemoveAll: state => {
      state.isOpenedModalAddtoCart = false;
      state.isOpenedModalRemoveAll = true;
    },
    closeModalRemoveAll: state => {
      state.isOpenedModalRemoveAll = false;
    },
    openModalAddtoCart: state => {
      state.isOpenedModalRemoveAll = false;
      state.isOpenedModalAddtoCart = true;
    },
    closeModalAddtoCart: state => {
      state.isOpenedModalAddtoCart = false;
    }
  }
});

export default favouriteItems.reducer;

export const {
  addToFavouriteItems,
  addToFavouriteItemsProducts,
  deleteFromFavouriteItems,
  openModalRemoveAll,
  closeModalRemoveAll,
  openModalAddtoCart,
  closeModalAddtoCart
} = favouriteItems.actions;
