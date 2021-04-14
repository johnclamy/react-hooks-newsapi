import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import newsapi from '../../api/newsapi';

const PATH_BASE = newsapi.rootUrl;
const PATH_TYPE = 'top-headlines';
const CATEGORY = 'general';
const COUNTRY = 'country=gb';
const API_KEY = newsapi.apiKey;

export const getArticles = createAsyncThunk(
  'articles/getArticles',
  async () => {
    const rslt = await axios.get(
      `${PATH_BASE}${PATH_TYPE}?${COUNTRY}&${CATEGORY}&apiKey=${API_KEY}`
    );
    return rslt.data;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articleList: [],
    status: null,
  },
  extraReducers: {
    [getArticles.pending]: (state) => {
      state.status = 'loading';
    },
    [getArticles.fulfilled]: (state, action) => {
      state.articleList = action.payload;
      state.status = 'success';
    },
    [getArticles.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default articlesSlice.reducer;
