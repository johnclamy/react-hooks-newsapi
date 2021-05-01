import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, ListGroup } from 'react-bootstrap';

import FETCH_STATUS from '../../app/helper/fetchStatus';
import { selectAllArticles, fetchArticles } from './articlesSlice';
import Article from './Article';

export default function List() {
  const [idle, loading, succeeded, failed] = FETCH_STATUS.status;
  const fetchStatus = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);
  const dispatch = useDispatch();
  const articles = useSelector(selectAllArticles);

  useEffect(() => {
    if (fetchStatus === idle) {
      dispatch(fetchArticles());
    }
  }, [fetchStatus, dispatch, idle]);

  let renderArticles;

  if (fetchStatus === loading) {
    renderArticles = (
      <Alert variant="info">
        <Alert.Heading>Loading articles...</Alert.Heading>
      </Alert>
    );
  } else if (fetchStatus === succeeded) {
    renderArticles = (
      <ListGroup>
        {articles.map((article) => {
          const id = article.url
            .slice(article.url.lastIndexOf('/') + 1)
            .concat(article.publishedAt);
          return <Article key={id} id={id} article={article} />;
        })}
      </ListGroup>
    );
  } else if (fetchStatus === failed) {
    renderArticles = (
      <Alert className="lead" variant="danger">
        {error}
      </Alert>
    );
  }

  return <>{renderArticles}</>;
}
