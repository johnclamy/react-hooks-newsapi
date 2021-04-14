import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

import { getArticles } from '../features/articles/articlesSlice';

export default function ArticlesList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <ListGroup variant='flush'>
      articles go here...
    </ListGroup>
  ) 
}
