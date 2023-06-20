import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    cartSumWithoutDiscount: JSON.parse(localStorage.getItem('cartSumWithoutDiscount')) || 0,
    sumDiscount: JSON.parse(localStorage.getItem('sumDiscount')) || 0,
    sumWithDiscount: JSON.parse(localStorage.getItem('sumWithDiscount')) || 0,
    isOpenedCartModalRemoveAll: false,
    isOpenedCartModalRemoveOne: false,
    isOpenedOrderModal: false
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
        const newArr = state.items.filter(item => item.id !== action.payload.id);
        state.items = [...newArr];
      }
    },
    setSum: (state, action) => {
      state.cartSumWithoutDiscount = action.payload.cartSumWithoutDiscount;
      state.sumDiscount = action.payload.sumDiscount;
      state.sumWithDiscount = action.payload.sumWithDiscount;
    },
    openCartModalRemoveAll: state => {
      state.isOpenedCartModalRemoveOne = false;
      state.isOpenedCartModalRemoveAll = true;
    },
    closeCartModalRemoveAll: state => {
      state.isOpenedCartModalRemoveAll = false;
    },
    openCartModalRemoveOne: state => {
      state.isOpenedCartModalRemoveAll = false;
      state.isOpenedCartModalRemoveOne = true;
    },
    closeCartModalRemoveOne: state => {
      state.isOpenedCartModalRemoveOne = false;
    },
    openOrderModal: state => {
      state.isOpenedOrderModal = true;
    },
    closeOrderModal: state => {
      state.isOpenedOrderModal = false;
    },
  }
});

export const { addToCart,
  addItem,
  removeItem,
  removeFromCart,
  setSum,
  openCartModalRemoveAll,
  closeCartModalRemoveAll,
  openCartModalRemoveOne,
  closeCartModalRemoveOne,
  openOrderModal,
  closeOrderModal
} = cartSlice.actions;

export default cartSlice.reducer;
