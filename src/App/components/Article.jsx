import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

import formatDate from '../../scripts/format-date';

export default function Article({ article }) {
  const { title, url, source, publishedAt, description } = article;

  return (
    <ListGroup.Item>
      <div>
        <h1 className="h5 text-primary">{title}</h1>
      </div>
      <ul className="list-unstyled d-flex w-100 justify-content-between">
        <li className="article-source-item">
          <a className="article-source-link" href={url}>
            {source.name}
          </a>
        </li>
        <li className="article-source-item">{formatDate(publishedAt)}</li>
      </ul>
      <p>{description}</p>
    </ListGroup.Item>
  );
}

Article.propTypes = {
  article: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      source: PropTypes.objectOf(PropTypes.string),
      name: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      publishedAt: PropTypes.string,
    })
  ),
};
