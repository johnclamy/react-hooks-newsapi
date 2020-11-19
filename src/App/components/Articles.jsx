import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import { ArticleContext } from '../contexts/ArticleContext';
import { SearchContext } from '../contexts/SearchContext';
import Article from './Article';
import searchArticles from '../../scripts/searchArticles';

export default function Articles() {
  const { articles } = React.useContext(ArticleContext);
  const { phrase } = React.useContext(SearchContext);
  const articleList = articles.length ? (
    <ListGroup variant="flush">
      {articles.filter(searchArticles(phrase)).map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </ListGroup>
  ) : (
    <p className="no-articles-label">
      No articles available for viewing. Please try again later.
    </p>
  );

  return articleList;
}
