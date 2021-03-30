import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

import ArticleListItem from './ArticleListItem';
import PageAlert from './PageAlert';
import newsapi from '../api/newsapi';
import {
  articleSelector,
  fetchArticles,
  getArticles,
  getArticlesSuccess,
  getArticlesFailure,
} from '../features/articles/articlesSlice';
import { searchTermSelector } from '../features/search/searchSlice';

const PATH_BASE = newsapi.rootUrl;
const PATH_TYPE = 'top-headlines';
const CATEGORY = 'general';
const COUNTRY = 'country=gb';
const API_KEY = newsapi.apiKey;

const searchArticlesBy = (term) => (article) =>
  !term || article.title.toLowerCase().includes(term.toLowerCase());

export default function () {
  const url = `${PATH_BASE}${PATH_TYPE}?${COUNTRY}&${CATEGORY}&apiKey=${API_KEY}`;
  const dispatch = useDispatch(
    fetchArticles,
    getArticles,
    getArticlesSuccess,
    getArticlesFailure
  );
  const { articles } = useSelector(articleSelector);
  const { searchTerm } = useSelector(searchTermSelector);

  useEffect(() => dispatch(fetchArticles(dispatch, url)));

  const articleList = !articles.length ? (
    <PageAlert>Loading articles...</PageAlert>
  ) : (
    <ListGroup>
      {articles.filter(searchArticlesBy(searchTerm)).map((article) => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </ListGroup>
  );

  return articleList;
}
