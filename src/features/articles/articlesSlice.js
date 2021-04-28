import { createSlice } from '@reduxjs/toolkit';

import initialState from './initialState';

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
});

// export { articleAdded } = articlesSlice.actions;
export const selectAllArticles = (state) => state.articles;
export const selectArticleById = (state, articleId) =>
  state.articles.find((a) => a.id === articleId);
export default articlesSlice.reducer;
