import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <Container>
        <p>&copy; 2024 S-Cafe. All rights reserved.</p>
        <div className="social-media">
          <a href="#" className="text-white mx-2">Facebook</a>
          <a href="#" className="text-white mx-2">Twitter</a>
          <a href="#" className="text-white mx-2">Instagram</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
