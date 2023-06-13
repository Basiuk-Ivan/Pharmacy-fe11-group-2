import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductsData = createAsyncThunk(
  'products/fetchProductsData',
  async ({ category, numPage }, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `http://localhost:3004/api/product?categories=${category}&page=${numPage}&limit=2`
      );

      if (!res.ok) {
        throw new Error('Server Error');
      }
      const data = await res.json();

      const { totalFound } = data;

      return { products: data.prods, totalFound };
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
