import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Alert from "react-bootstrap/Alert"

import ArticleContextProvider from '../contexts/ArticleContext'
// import SearchContextProvider from '../contexts/SearchContext'
import FilterToolbar from '../components/FilterToolbar'
import SearchBar from '../components/SearchBar'
import Articles from '../components/Articles'
import FilterAside from '../components/FilterAside'

export default function Home () {
  return (
    <ArticleContextProvider>
      <FilterToolbar />
      <Container>
        <Row>
          <Col sm={9} lg={8}>
            <article className='articles-container'>
              <header>
                <Alert variant='dark'>
                  
                    <SearchBar />

                </Alert>
              </header>
              <Articles />
              <footer>article pages</footer>
            </article>
          </Col>
          <Col sm={3} lg={{ span: 3, offset: 1 }}>
            <FilterAside />
          </Col>
        </Row>
      </Container>
    </ArticleContextProvider>
  )
}