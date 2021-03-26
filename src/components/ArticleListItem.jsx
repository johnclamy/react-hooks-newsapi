import PropTypes from 'prop-types';
import { Button, Badge, ListGroup } from 'react-bootstrap';

export default function ArticleListItem({ article }) {
  return (
    <ListGroup.Item className="mb-3">
      <header>
        <h1 className="h3">
          <a className="text-decoration-none text-primary" href={article.url}>
            {article.title}
          </a>
        </h1>
      </header>
      <main>
        <section className="mt-4 mb-3 d-flex justify-content-between">
          <Badge variant="warning">{article.source}</Badge>
          <Badge variant="info">{article.publishedAt}</Badge>
        </section>
        <p className="lead text-dark-50">{article.description}</p>
      </main>
      <footer>
        <Button
          className="text-capitalize float-right mt-2 mb-0"
          variant="danger"
          size="sm"
        >
          remove
        </Button>
      </footer>
    </ListGroup.Item>
  );
}

ArticleListItem.propTypes = {
  article: PropTypes.objectOf(PropTypes.string),
};
