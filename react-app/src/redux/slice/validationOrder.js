import { createSlice } from '@reduxjs/toolkit';

const validationOrder = createSlice({
  name: 'order',
  initialState: {
    city: '',
    address: ''
  },
  reducers: {
    addCity: (state, action) => {
      state.city = action.payload;
    }
  }
});

export const { addCity } = validationOrder.actions;

export default validationOrder.reducer;
