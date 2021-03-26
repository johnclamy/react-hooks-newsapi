import { createSlice } from '@reduxjs/toolkit';
import initialArticles from './initialArticles';

const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    isLoading: false,
    hasErrors: false,
    articles: initialArticles,
  },
  reducers: {
    getArticles: (state) => {
      state.isLoading = true;
    },
    onArticlesSuccess: (state, { payload }) => {
      state.articles = payload;
      state.isLoading = false;
      state.hasErrors = false;
    },
    onArticlesError: (state) => {
      state.isLoading = false;
      state.hasErrors = true;
    },
  },
});

export const {
  getArticles,
  onArticlesSuccess,
  onArticlesError,
} = articleSlice.actions;

export const articleSelector = (state) => state.articles;

export function fetchArticles(url) {
  return async (dispatch) => {
    dispatch(getArticles());

    try {
      const rslt = await fetch(url);
      const data = await rslt.json();
      dispatch(onArticlesSuccess(data));
    } catch (error) {
      dispatch(onArticlesError());
    }
  };
}
