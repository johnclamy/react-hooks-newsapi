import { createSlice, nanoid } from '@reduxjs/toolkit';

import initialState from './initialState';
import FETCH_STATUS from '../../app/helper/fetchStatus';

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
export default articlesSlice.reducer;
