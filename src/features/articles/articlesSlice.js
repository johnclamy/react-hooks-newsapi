import { createSlice } from '@reduxjs/toolkit';

import initialState from './initialState';

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
});

export default articlesSlice.reducer;
