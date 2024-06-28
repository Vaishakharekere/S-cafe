import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './styles/Navbar.css';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Nav.Link href="/">
        <Navbar.Brand href="/">S-Cafe</Navbar.Brand></Nav.Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div>
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
