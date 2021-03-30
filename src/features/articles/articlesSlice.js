import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
// import initialArticles from './initialArticles';

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    loading: false,
    hasErrors: false,
    articles: [],
  },
  reducers: {
    getArticles: (state) => (state.loading = true),
    getArticlesSuccess: (state, action) => {
      state.articles = action.payload;
      state.loading = false;
      state.hasErrors = false;
      console.log(action.payload);
    },
    getArticlesFailure: (state, action) => {
      state.loading = false;
      state.hasErrors = true;
      console.error(action.payload);
    },

    removeArticle: (state, action) => {
      const articles = state.articles.filter(
        (article) => article.id !== action.payload
      );
      state.articles = articles;
    },
  },
});

export const {
  getArticles,
  getArticlesSuccess,
  getArticlesFailure,
  removeArticle,
} = articlesSlice.actions;
export const articleSelector = (state) => state.articles;
export default articlesSlice.reducer;

export function fetchArticles(dispatch, url) {
  dispatch(getArticles());
  axios
    .get(url)
    .then((rslt) => dispatch(getArticlesSuccess(rslt)))
    .catch((error) => dispatch(getArticlesFailure(error)));
}
