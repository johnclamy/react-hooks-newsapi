import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Badge, ListGroup } from 'react-bootstrap';

import formatDate from '../../app/helper/formatDate';

export default function Article({ id, article }) {
  return (
    <ListGroup.Item className="mb-3 py-4">
      <header>
        <h1 className="h3">
          <Link
            to={`/articles/${id}`}
            className="text-decoration-none text-primary"
          >
            {article.title}
          </Link>
        </h1>
      </header>
      <main>
        <section className="mt-4 mb-3 d-flex justify-content-between">
          <Badge variant="warning">{article.source.name}</Badge>
          <Badge variant="info">{formatDate(article.publishedAt)}</Badge>
        </section>
      </main>
    </ListGroup.Item>
  );
}

Article.propTypes = {
  id: PropTypes.string,
  article: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ),
};
