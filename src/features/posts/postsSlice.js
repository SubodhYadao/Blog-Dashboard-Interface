import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulated categories for posts by userId
const categories = ['Tech', 'Lifestyle', 'Education', 'News'];

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  // Assign categories based on userId modulo categories length
  return data.map(post => ({
    ...post,
    category: categories[post.userId % categories.length],
  }));
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    filter: 'All',
  },
  reducers: {
    addPost: (state, action) => {
      state.items.push(action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addPost, setFilter } = postsSlice.actions;

export default postsSlice.reducer;
