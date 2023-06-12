import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductsData = createAsyncThunk(
  'products/fetchProductsData',
  async (category, { rejectWithValue }) => {
    try {
      // const res = await fetch('/products.json');
      const res = await fetch(`http://localhost:3004/api/product?categories=${category}`);

      if (!res.ok) {
        throw new Error('Server Error');
      }
      const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
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
        state.products = action.payload;
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.status = 'rejected';
        state.err = action.payload;
      });
  }
});

export default productsSlice.reducer;
