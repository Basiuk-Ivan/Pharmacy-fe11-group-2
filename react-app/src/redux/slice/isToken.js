import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: JSON.parse(localStorage.getItem('token')) || ''
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: state => {
      state.token = '';
    }
  }
});

export const { setToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
