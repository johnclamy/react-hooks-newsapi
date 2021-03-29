import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

import ArticleListItem from './ArticleListItem';
import PageAlert from './PageAlert';
import newsapi from '../api/newsapi';
import { articleSelector } from '../features/articles/articlesSlice';
import { searchTermSelector } from '../features/search/searchSlice';

const PATH_BASE = newsapi.rootUrl;
const PATH_TYPE = 'top-headlines';
const CATEGORY = 'general';
const COUNTRY = 'country=gb';
const API_KEY = newsapi.apiKey;
const url = '';

const searchArticlesBy = (term) => (article) =>
  !term || article.title.toLowerCase().includes(term.toLowerCase());

export default function () {
  const { articles } = useSelector(articleSelector);
  const { searchTerm } = useSelector(searchTermSelector);
  const articleList = !articles.length ? (
    <PageAlert>
      <strong>Sorry!</strong> There are currently no articles available for
      viewing.
    </PageAlert>
  ) : (
    <ListGroup>
      {articles.filter(searchArticlesBy(searchTerm)).map((article) => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </ListGroup>
  );

  return articleList;
}
