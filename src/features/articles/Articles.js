import { useSelector } from 'react-redux';
import { Alert, ListGroup } from 'react-bootstrap';

import Article from './Article';

export default function List() {
  const articles = useSelector((state) => state.articles);
  const renderArticles = !articles.length ? (
    <Alert className="lead" variant="info">
      No articles available for listing.
    </Alert>
  ) : (
    <ListGroup>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </ListGroup>
  );

  return renderArticles;
}