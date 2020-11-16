import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="app-footer">
      <Container fluid>
        <Row>
          <Col>
            <ul className="list-inline mb-1">
              <li className="list-inline-item">
                <Button type="button" variant="link">
                  <FaFacebook />
                </Button>
              </li>
              <li className="list-inline-item">
                <Button type="button" variant="link">
                  <FaTwitter />
                </Button>
              </li>
              <li className="list-inline-item">
                <Button type="button" variant="link">
                  <FaPinterest />
                </Button>
              </li>
              <li className="list-inline-item">
                <Button type="button" variant="link">
                  <FaLinkedin />
                </Button>
              </li>
            </ul>
            <p className="app-footer-credits">
              &copy; 2019 Daily Reporter | <strong>Free</strong> ripo on{' '}
              <Button type="button" variant="link">
                <FaGithub style={{ marginTop: '-3px', marginLeft: '-2px' }} />
              </Button>
            </p>
            <p className="app-footer-credits">
              {' '}
              News content provided by{' '}
              <a href="https://newsapi.org/">News API</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
