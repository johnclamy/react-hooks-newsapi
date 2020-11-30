import React from 'react';
import PropTypes from 'prop-types';

// import initialArticles from '../../data/initial-articles';
import { fetchTopNews } from '../../api/fetch';

export const ArticleContext = React.createContext();

export default function ArticleContextProvider({ children }) {
  const [articles, setArticles] = React.useState([]);
  const handleSetTopNews = async () => {
    const news = await fetchTopNews();
    console.log(news);
    setArticles(news);
  };

  React.useEffect(() => handleSetTopNews(), []);

  return (
    <ArticleContext.Provider value={{ articles }}>
      {children}
    </ArticleContext.Provider>
  );
}

ArticleContextProvider.propTypes = {
  children: PropTypes.node,
};
