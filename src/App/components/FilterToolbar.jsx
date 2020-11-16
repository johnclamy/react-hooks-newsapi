import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function FilterToolbar() {
  return (
    <section className="filter-toolbar">
      <Container>
        <Row>
          <Col>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <Button type="button">top news</Button>
              </li>
              <li className="list-inline-item">
                <Button type="button">latest news</Button>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
