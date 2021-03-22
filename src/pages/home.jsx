import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import FilterToolbar from '../components/FilterToolbar';
import SearchBar from '../components/SearchBar';
import FilterAside from '../components/FilterAside';
import Articles from '../components/Articles';

export default function Home() {
  return (
    <>
      <FilterToolbar />
      <Container>
        <Row>
          <Col sm={9} lg={8}>
            <article className="articles-container">
              <header>
                <Alert variant="dark">
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
    </>
  );
}
