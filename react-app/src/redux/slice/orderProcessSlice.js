import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  PaymentMethodValue: 'cash',
  orderInfo: { deliveryType: 'self' }
};

const orderProcessSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addPaymentMethod: (state, action) => ({
      ...state, PaymentMethodValue: action.payload,
    }),
    addOrderDeliveryMethod: (state, action) => ({
      ...state,
      orderInfo: {
        ...state.orderInfo,
        deliveryType: action.payload,
      },
    }),
    addOrderCity: (state, action) => ({
      ...state,
      orderInfo: {
        ...state.orderInfo,
        city: action.payload,
      },
    }),
    addOrderAddress: (state, action) => ({
      ...state,
      orderInfo: {
        ...state.orderInfo,
        address: action.payload,
      },
    }),
    addContactsInfo: (state, action) => ({
      ...state,
      orderInfo: {
        ...state.orderInfo,
        contacts: action.payload,
      },
    }),
  },
});

export const { addPaymentMethod, addOrderDeliveryMethod, addOrderCity, addOrderAddress, addContactsInfo } = orderProcessSlice.actions;

export default orderProcessSlice.reducer;
