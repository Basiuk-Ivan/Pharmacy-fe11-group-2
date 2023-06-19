import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../tools/request';

export const fetchProductsData = createAsyncThunk(
  'products/fetchProductsData',

  async (requestString, { rejectWithValue }) => {
    try {
      const { result } = await request({
        url: `?${requestString}`,
        method: 'GET'
      });

      const response = result;

      const { totalFound } = response;

      return { products: response.data, totalFound };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    totalFound: 0,
    status: null,
    err: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProductsData.pending, state => {
        state.status = 'loading';
        state.err = null;
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.products = action.payload.products;
        state.totalFound = action.payload.totalFound;
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.status = 'rejected';
        state.err = action.payload;
      });
  }
});

export default productsSlice.reducer;
