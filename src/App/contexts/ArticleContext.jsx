import React, { createContext, useState } from 'react'

import { initialArticles } from '../../data/initial-articles'

export const ArticleContext = createContext()

export default function ArticleContextProvider (props) {
  const [ articles, setArticles ] = useState([ ...initialArticles ])

  const onArticleRemove = id => {
    const filteredArticles = articles.filter(article => article.id !== id)
    setArticles(filteredArticles) 
  }

  return (
    <ArticleContext.Provider value={{ articles, onArticleRemove }}>
      {props.children}
    </ArticleContext.Provider>
  )
}