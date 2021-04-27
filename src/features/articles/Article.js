import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Badge, ListGroup } from 'react-bootstrap';

import formatDate from '../../app/helper';

export default function Article({ article }) {
  return (
    <ListGroup.Item className="mb-3 py-4">
      <header>
        <h1 className="h3">
          <Link
            to={`/articles/${article.id}`}
            className="text-decoration-none text-primary"
          >
            {article.title}
          </Link>
        </h1>
      </header>
      <main>
        <section className="mt-4 mb-3 d-flex justify-content-between">
          <Badge variant="warning">{article.source}</Badge>
          <Badge variant="info">{formatDate(article.publishedAt)}</Badge>
        </section>
      </main>
    </ListGroup.Item>
  );
}

Article.propTypes = {
  article: PropTypes.objectOf(PropTypes.string),
};
