import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

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
    <p className="no-articles-label">
      No articles available for viewing. Please try again later.
    </p>
  );

  return articleList;
}
