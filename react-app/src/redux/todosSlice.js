import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('products/fetchPosts', async (_, { rejectWithValue }) => {
  try {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const res = await fetch('/products.json');

    if (!res.ok) {
      throw new Error('Server Error');
    }
    const data = await res.json();

    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: null,
    err: null
  },
  reducers: {
    getProducts(state, action) {
      state.products.push(action.payload);
      state.products.reverse();
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.status = 'loading';
        state.err = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.products = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'rejected';
        state.err = action.payload;
      });
  }
});

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
