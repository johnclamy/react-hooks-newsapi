import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../features/articles/articlesSlice';
import searchReducer from '../features/search/searchSlice';

export default configureStore({
  reducer: {
    articles: articlesReducer,
    searchTerm: searchReducer,
  },
});
