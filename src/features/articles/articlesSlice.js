import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client';

import initialState from './initialState';
import FETCH_STATUS from '../../app/helper/fetchStatus';

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async () => {
    const response = await client.get('/newsapi/articles');
    return response.articles;
  }
);

const [, loading, succeeded, failed] = FETCH_STATUS.status;

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    articleAdded: {
      reducer(state, action) {
        state.articles.push(action.payload);
      },
      prepare(title, source, publishedAt, description) {
        return {
          payload: {
            id: nanoid(),
            title,
            source,
            publishedAt,
            description,
          },
        };
      },
    },
  },
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

export const { articleAdded } = articlesSlice.actions;
export const selectAllArticles = (state) => state.articles.articles;
export const selectArticleById = (state, articleId) =>
  state.articles.articles.find((a) => a.id === articleId);

export default articlesSlice.reducer;
