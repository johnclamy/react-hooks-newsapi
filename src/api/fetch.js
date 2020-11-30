import axios from 'axios';
import newsapi from '../config/newsapi';

const ROOT_URL = newsapi.rootUrl;
const API_KEY = newsapi.apiKey;

export const fetchTopNews = async (source = 'bbc-news') => {
  const url = `${ROOT_URL}top-headlines?sources=${source}&apiKey=${API_KEY}`;
  try {
    const { data } = await axios.get(url);
    return data.articles;
  } catch (err) {
    console.error(err.message);
  }
};
