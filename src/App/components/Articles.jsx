import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';

import { ArticleContext } from '../contexts/ArticleContext';
import Article from './Article';

export default function Articles() {
  const { initialArticles } = React.useContext(ArticleContext);
  const articleList = initialArticles.length ? (
    <ListGroup variant="flush">
      {initialArticles.map((article) => (
        <Article key={article.url} article={article} />
      ))}
    </ListGroup>
  ) : (
    <Alert variant="info">
      <strong>Loading news articles...</strong> Thank you for your patience.
    </Alert>
  );

  return articleList;
}
