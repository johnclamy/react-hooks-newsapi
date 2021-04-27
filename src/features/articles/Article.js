import PropTypes from 'prop-types';
import { Button, Badge, ListGroup } from 'react-bootstrap';

function formatDate(strDate) {
  const arrDate = strDate.split('-');
  const dayTime = arrDate[2].split('T');
  const time = dayTime[1].slice(0, 5);

  return `${dayTime[0]}/${arrDate[1]}/${arrDate[0]}, ${time}`;
}

export default function Article({ article }) {
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
          <Badge variant="info">{formatDate(article.publishedAt)}</Badge>
        </section>
        <p className="lead text-dark-50">{article.description}</p>
      </main>
    </ListGroup.Item>
  );
}

Article.propTypes = {
  article: PropTypes.objectOf(PropTypes.string),
};
