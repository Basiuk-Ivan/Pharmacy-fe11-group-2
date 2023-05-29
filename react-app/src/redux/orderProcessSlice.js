import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  PaymentMethodValue: 'cash',
};

const orderProcessSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addPaymentMethod: (state, action) => ({
      ...state, PaymentMethodValue: action.payload,
    }),
  },
});

export const { addPaymentMethod } = orderProcessSlice.actions;

export default orderProcessSlice.reducer;
