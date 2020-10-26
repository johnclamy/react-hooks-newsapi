import React, { useContext } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

import { ArticleContext } from '../contexts/ArticleContext'
import { SearchContext } from '../contexts/SearchContext'
import Article from './Article'
import searchArticles from '../../scripts/searchArticles'

export default function Articles (props) {
  const { articles, onArticleRemove } = useContext(ArticleContext)
  const { phrase } = useContext(SearchContext)

  return (
    <ListGroup variant="flush">
      {articles.filter(searchArticles(phrase)).map(article =>
        <Article
          key={article.id}
          id={article.id}
          source={article.source}
          title={article.title}
          description={article.description}
          url={article.ulr}
          publishedAt={article.publishedAt}
          onArticleRemove={onArticleRemove}
        />          
      )}
    </ListGroup>
  )
}