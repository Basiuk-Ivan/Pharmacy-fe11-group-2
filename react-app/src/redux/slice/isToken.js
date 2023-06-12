import { createSlice } from '@reduxjs/toolkit';

const storedToken = localStorage.getItem('token');
const initialState = {
  token: storedToken || ''
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
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
