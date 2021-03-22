import { createSlice } from '@reduxjs/toolkit';

const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    isLoading: false,
    hasErrors: false,
    articles: [
      {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        source: 'The Guardian',
        title:
          'Electric cars: five best buys, from new models to used bargains',
        description: 'The Canon EOS R5 reveal in a five-minute nutshell',
        url:
          'https://www.theguardian.com/money/2020/jul/11/electric-cars-five-best-buys-from-new-models-to-used-bargains',
        publishedAt: '2020-07-13T10:19:00Z',
      },
      {
        id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
        source: 'TechRadar',
        title:
          "Canon EOS R5: 9 new things we've learnt about the full-frame mirrorless flagship",
        description:
          'Most new vehicles can now exceed 200 miles on a single charge. We look at options for every budget',
        url:
          'https://www.techradar.com/news/canon-eos-r5-9-new-things-weve-learnt-about-the-full-frame-mirrorless-flagship',
        publishedAt: '2020-07-13T10:19:00Z',
      },
    ],
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
