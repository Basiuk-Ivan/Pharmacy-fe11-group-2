import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    singleCartItemDeleted: JSON.parse(localStorage.getItem('singleCartItemDeleted')) || ''
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ id: action.payload });
    },
    removeItem: (state, action) => {
      if (action.payload === 'all') {
        state.items = [];
      }
      state.items = state.items.filter(item => item.id !== action.payload);
      state.singleCartItemDeleted = action.payload;
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
