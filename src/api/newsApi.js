import newsapi from '../config/newsapi';

function fetchNews(url, save) {
  window
    .fetch(url)
    .then((data) => data.json())
    .then((rslt) => save(rslt.articles))
    .catch((err) => console.error(err));
}

export const fetchDefaultArticles = (save) =>
  fetchNews(newsapi.get('uk'), save);
export const fetchLatestArticles = (save) =>
  fetchNews(newsapi.get('latest'), save);
export const fetchBbcArticles = (save) => fetchNews(newsapi.get('bbc'), save);
export const fetchBizArticles = (save) => fetchNews(newsapi.get('biz'), save);
export const fetchShowBizArticles = (save) =>
  fetchNews(newsapi.get('showBiz'), save);
export const fetchHealthArticles = (save) =>
  fetchNews(newsapi.get('health'), save);
export const fetchSportsArticles = (save) =>
  fetchNews(newsapi.get('sport'), save);
export const fetchTechArticles = (save) => fetchNews(newsapi.get('tech'), save);
export const fetchArticlesBy = (topic, save) =>
  fetchNews(newsapi.getBy(topic), save);
