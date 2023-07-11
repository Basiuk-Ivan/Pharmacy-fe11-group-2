import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  PaymentMethodValue: 'cash',
  isDelivery: false,
  orderInfo: { deliveryType: 'self' }
};

const orderProcessSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    activeDelivery: state => {
      state.isDelivery = true;
    },
    resetDelivery: state => {
      state.isDelivery = false;
    },
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

export const {
  activeDelivery,
  resetDelivery,
  addPaymentMethod,
  addOrderDeliveryMethod,
  addOrderCity,
  addOrderAddress,
  addContactsInfo } = orderProcessSlice.actions;

export default orderProcessSlice.reducer;
