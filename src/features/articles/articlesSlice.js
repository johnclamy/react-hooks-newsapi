import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import initialState from './initialState';
import FETCH_STATUS from '../../app/helper/fetchStatus';
import newsapiArticles from '../../api/client';

const { all } = newsapiArticles;

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async () => {
    const response = await axios.get(all);
    console.log(response.data.articles);
    return response.data.articles;
  }
);

const [, loading, succeeded, failed] = FETCH_STATUS.status;

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchArticles.pending]: (state) => {
      state.status = loading;
    },

    [fetchArticles.fulfilled]: (state, action) => {
      state.status = succeeded;
      state.articles = state.articles.concat(action.payload);
    },

    [fetchArticles.rejected]: (state, action) => {
      state.status = failed;
      state.error = action.error.message;
    },
  },
});

export const selectAllArticles = (state) => state.articles.articles;
export const selectArticleById = (state, articleId) =>
  state.articles.articles.find((a) => a.id === articleId);

export default articlesSlice.reducer;
