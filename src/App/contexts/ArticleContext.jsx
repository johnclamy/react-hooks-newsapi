import React from 'react';
import PropTypes from 'prop-types';

// import initialArticles from '../../data/initial-articles';
import { fetchTopNews } from '../../api/fetch';

export const ArticleContext = React.createContext();

export default function ArticleContextProvider({ children }) {
  const [initialArticles, setInitialArticles] = React.useState([]);
  const handleSetTopNews = async () => {
    const news = await fetchTopNews();
    console.log(news);
    setInitialArticles(news);
  };

  React.useEffect(() => handleSetTopNews(), []);

  return (
    <ArticleContext.Provider value={{ initialArticles }}>
      {children}
    </ArticleContext.Provider>
  );
}

ArticleContextProvider.propTypes = {
  children: PropTypes.node,
};
