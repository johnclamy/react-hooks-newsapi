import { configureStore } from '@reduxjs/toolkit';

import articlesReducer from '../../features/articles/articlesSlice.js';

export default configureStore({
  reducer: {
    articles: articlesReducer,
  },
});
