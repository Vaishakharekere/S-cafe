import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './styles/Navbar.css';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="./Logo.png"
            width="35"
            height="35"
            className="d-inline-block align-top"
            alt="S-Cafe logo"
          />
          {' Sahyadri Cafe'}
        </Navbar.Brand>
        <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/login">Login/Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
        
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
