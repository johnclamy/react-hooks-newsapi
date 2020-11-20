import React from 'react';
import PropTypes from 'prop-types';

import initialArticles from '../../data/initial-articles';
// import { fetchDefaultArticles } from '../../api/newsApi';

export const ArticleContext = React.createContext();

export default function ArticleContextProvider({ children }) {
  const [articles, setArticles] = React.useState(initialArticles);
  //  const handleSetArticles = (_articles) => setArticles(_articles);
  /*
  React.useEffect(() => {
    fetchDefaultArticles(handleSetArticles);
  }, []);
*/
  console.log(articles);

  return (
    <ArticleContext.Provider value={{ articles }}>
      {children}
    </ArticleContext.Provider>
  );
}

ArticleContextProvider.propTypes = {
  children: PropTypes.node,
};
