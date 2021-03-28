// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert, ListGroup } from 'react-bootstrap';

import ArticleListItem from './ArticleListItem';
import { articleSelector } from '../features/articles/articlesSlice';

export default function () {
  const { articles } = useSelector(articleSelector);
  const articleList = !articles.length ? (
    <Alert className="lead text-center" variant="info">
      Loading articles...
    </Alert>
  ) : (
    <ListGroup>
      {articles.map((article) => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </ListGroup>
  );

  console.log(articles);
  return articleList;
}
