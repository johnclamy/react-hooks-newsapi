import { useSelector } from 'react-redux';
import { Alert, ListGroup } from 'react-bootstrap';

import ArticleListItem from './ArticleListItem';
import { articleSelector } from '../features/articles/articlesSlice';
import { searchTermSelector } from '../features/search/searchSlice';

const searchArticlesBy = (term) => (article) =>
  !term || article.title.toLowerCase().includes(term.toLowerCase());

export default function () {
  const { articles } = useSelector(articleSelector);
  const { searchTerm } = useSelector(searchTermSelector);
  const articleList = !articles.length ? (
    <Alert className="lead text-center" variant="info">
      Loading articles...
    </Alert>
  ) : (
    <ListGroup>
      {articles.filter(searchArticlesBy(searchTerm)).map((article) => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </ListGroup>
  );

  return articleList;
}
