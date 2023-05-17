import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('post/fetchPosts', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!res.ok) {
      throw new Error('Server Error');
    }
    const data = await res.json();

    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: null,
    err: null
  },
  reducers: {
    getPosts(state, action) {
      state.posts.push(action.payload);
      state.posts.reverse();
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
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'rejected';
        state.err = action.payload;
      });
  }
});

export const { getPosts } = postsSlice.actions;
export default postsSlice.reducer;
