import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Alert, Button, Col, Row, Card } from 'react-bootstrap';

import { selectArticleById } from './articlesSlice';
import formatDate from '../../app/helper/formatDate';

export default function SinglePostPage({ match }) {
  const history = useHistory();
  const { articleId } = match.params;
  const article = useSelector((state) => selectArticleById(state, articleId));
  console.log(articleId);
  if (!article) {
    return (
      <Alert variant="warning">
        <Alert.Heading>Article not found!</Alert.Heading>
      </Alert>
    );
  }

  return (
    <Row>
      <Col>
        <Card className="mt-3 mb-4">
          <Card.Body>
            <Card.Title className="mt-3">{article.title}</Card.Title>
            <Card.Subtitle
              style={{ fontSize: '0.85em' }}
              className="mb-4 text-muted font-italic"
            >
              {article.source.name}
              &nbsp; &nbsp; &nbsp;
              {formatDate(article.publishedAt)}
            </Card.Subtitle>
            <Card.Text className="pb-3 lead text-dark-50">
              {article.content}
            </Card.Text>
            <Card.Footer className="py-3 text-center">
              <Button onClick={history.goBack} variant="link">
                Back to articles
              </Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

SinglePostPage.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
};
