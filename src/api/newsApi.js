import newsapi from '../config/newsapi';

function fetchNews(url) {
  window
    .fetch(url)
    .then((data) => data.json())
    .then((rslt) => console.log(rslt))
    .catch((err) => console.error(err));
}

export function fetchBbcArticles() {
  const URL = newsapi.get('bbc');
  fetchNews(URL);
}
