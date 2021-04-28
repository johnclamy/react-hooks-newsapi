import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client';

import initialState from './initialState';

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
});

export const { articleAdded } = articlesSlice.actions;
export const selectAllArticles = (state) => state.articles.articleList;
export const selectArticleById = (state, articleId) =>
  state.articles.articleList.find((a) => a.id === articleId);

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async () => {
    const response = await client.get('/newsapi/articles');
    return response.articles;
  }
);

export default articlesSlice.reducer;
