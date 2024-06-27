import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/Testimonials.css';

const Testimonials = () => {
  return (
    <Container className="testimonials my-5">
      <h2 className="text-center">Testimonials</h2>
      <blockquote className="blockquote text-center">
        <p className="mb-0">"Great food and excellent service!" - Student A</p>
      </blockquote>
      <blockquote className="blockquote text-center">
        <p className="mb-0">"The best canteen experience on campus." - Staff B</p>
      </blockquote>
    </Container>
  );
};

export default Testimonials;
