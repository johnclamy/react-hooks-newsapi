import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert, ListGroup } from 'react-bootstrap';

import ArticleListItem from './ArticleListItem';

export default function () {
  const articleData = useSelector((state) => state.articles);
  const [articles, setArticles] = useState(articleData.articles);
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

  console.log(articleData.articles);
  console.log(articles);
  return articleList;
}
