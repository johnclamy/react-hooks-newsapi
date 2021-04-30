const NEWS_API = {
  key: process.env.REACT_APP_NEWSAPI_KEY,
  url: 'https://newsapi.org/v2',
  date: '2021-04-28&to=2021-04-28',
  sort: 'popularity',
};

const newsapiArticles = {
  all: `${NEWS_API.url}/everything?q=apple&from=${NEWS_API.date}&sortBy=${NEWS_API.sort}&apiKey=${NEWS_API.key}`,
};

export default newsapiArticles;
