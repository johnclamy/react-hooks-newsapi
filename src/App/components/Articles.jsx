import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import { ArticleContext } from '../contexts/ArticleContext';
import Article from './Article';

export default function Articles() {
  const { articles } = React.useContext(ArticleContext);
  console.log(articles);
  const articleList = articles.length ? (
    <ListGroup variant="flush">
      {articles.map((article) => (
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
