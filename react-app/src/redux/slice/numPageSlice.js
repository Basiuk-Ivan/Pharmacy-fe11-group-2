import { createSlice } from '@reduxjs/toolkit';

const numPageSlice = createSlice({
  name: 'numPage',
  initialState: {
    numPage: 1 },
  reducers: {
    changePage: (state, action) => {
      state.numPage = action.payload;
    },
  }
});

export const { changePage } = numPageSlice.actions;

export default numPageSlice.reducer;
