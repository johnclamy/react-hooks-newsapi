import { createSlice } from '@reduxjs/toolkit';
import initialArticles from './initialArticles';

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    loading: false,
    hasErrors: false,
    articles: initialArticles,
  },
  reducers: {
    addArticle: () => {},
    getArticles: () => {},
    getArticlesSuccess: () => {},
    getArticlesFailure: () => {},
    removeArticle: () => {},
  },
});

export const { addArticle, removeArticle } = articlesSlice.actions;
export const articleSelector = (state) => state.articles;
export default articlesSlice.reducer;
