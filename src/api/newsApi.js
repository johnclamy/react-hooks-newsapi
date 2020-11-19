import newsapi from '../config/newsapi';

function fetchNews(url) {
  window
    .fetch(url)
    .then((data) => data.json())
    .then((rslt) => console.log(rslt))
    .catch((err) => console.error(err));
}

export const fetchDefaultArticles = () => fetchNews(newsapi.get('uk'));
export const fetchLatestArticles = () => fetchNews(newsapi.get('latest'));
export const fetchBbcArticles = () => fetchNews(newsapi.get('bbc'));
export const fetchBizArticles = () => fetchNews(newsapi.get('biz'));
export const fetchShowBizArticles = () => fetchNews(newsapi.get('showBiz'));
export const fetchHealthArticles = () => fetchNews(newsapi.get('health'));
export const fetchSportsArticles = () => fetchNews(newsapi.get('sport'));
export const fetchTechArticles = () => fetchNews(newsapi.get('tech'));
export const fetchArticlesBy = (topic) => fetchNews(newsapi.getBy(topic));
