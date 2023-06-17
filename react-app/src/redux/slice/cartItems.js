import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    cartSumWithoutDiscount: 0,
    sumDiscount:0,
    sumWithDiscount:0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const cartItem = { id, quantity: 1 };
      const existingCartItemIndex = state.items.findIndex(item => item.id === id);
      if (existingCartItemIndex !== -1) {
        const updatedCart = [...state.items];
        updatedCart[existingCartItemIndex].quantity += 1;
        state.items = [...updatedCart];
      } else {
        const updatedCart = [...state.items, cartItem];
        state.items = [...updatedCart];
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const existingCartItemIndex = state.items.findIndex(item => item.id === id);
      const updatedCart = [...state.items];
      if (updatedCart[existingCartItemIndex].quantity > 1) {
        updatedCart[existingCartItemIndex].quantity -= 1;
        state.items = [...updatedCart];
      } else {
        const newArr = state.items.filter(item => item.id !== id);
        state.items = [...newArr];
      }
    },
    removeItem: (state, action) => {
      if (action.payload === 'all') {
        state.items = [];
      } else {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
    setSum: (state, action) => {
      state.cartSumWithoutDiscount = action.payload.cartSumWithoutDiscount;
      state.sumDiscount = action.payload.sumDiscount;
      state.sumWithDiscount = action.payload.sumWithDiscount;
    },
  }
});

export const { addToCart, addItem, removeItem, removeFromCart, setSum } = cartSlice.actions;

export default cartSlice.reducer;
