import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import * as ROUTES from '../routes';

export default function Navigation() {
  return (
    <Navbar className="app-navbar" expand="lg">
      <Navbar.Brand className="app-navbar-brand">
        <Link to={ROUTES.HOME}>daily reporter</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to={ROUTES.HOME}>
            <Nav.Link>home</Nav.Link>
          </LinkContainer>
          <LinkContainer to={ROUTES.ABOUT}>
            <Nav.Link>about</Nav.Link>
          </LinkContainer>
          <LinkContainer to={ROUTES.CONTACT}>
            <Nav.Link>contact</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <Button variant="light" className="text-uppercase">
            login
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
