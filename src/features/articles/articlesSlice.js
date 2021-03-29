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

    removeArticle: (state, action) => {
      const articles = state.articles.filter(
        (article) => article.id !== action.payload
      );
      state.articles = articles;
    },
  },
});

export const {
  addArticle,
  getArticles,
  getArticlesSuccess,
  getArticlesFailure,
  removeArticle,
} = articlesSlice.actions;
export const articleSelector = (state) => state.articles;
export default articlesSlice.reducer;

export function fetchArticles() {}
