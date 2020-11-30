import React from 'react';
import PropTypes from 'prop-types';

import { fetchTopNews } from '../../api/fetch';

export const ArticleContext = React.createContext();

export default function ArticleContextProvider({ children }) {
  const [initialArticles, setInitialArticles] = React.useState([]);

  const handleGetInitialArticles = async () => {
    const news = await fetchTopNews();
    setInitialArticles(news);
  };

  React.useEffect(() => handleGetInitialArticles(), []);

  return (
    <ArticleContext.Provider value={{ initialArticles }}>
      {children}
    </ArticleContext.Provider>
  );
}

ArticleContextProvider.propTypes = {
  children: PropTypes.node,
};
