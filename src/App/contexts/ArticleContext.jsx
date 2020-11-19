import React from 'react';
import PropTypes from 'prop-types';

import initialArticles from '../../data/initial-articles';
// import { fetchBbcArticles } from '../../api/newsApi';

export const ArticleContext = React.createContext();

export default function ArticleContextProvider({ children }) {
  const [articles, setArticles] = React.useState(initialArticles);
  const handleRemoveArticle = (id) => {
    const filteredArticles = articles.filter((article) => article.id !== id);
    setArticles(filteredArticles);
  };

  React.useEffect(() => {
    // fetchBbcArticles();
  }, []);

  return (
    <ArticleContext.Provider
      value={{
        articles,
        onRemoveArticle: handleRemoveArticle,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
}

ArticleContextProvider.propTypes = {
  children: PropTypes.element,
};
