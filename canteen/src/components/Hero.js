import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './styles/Hero.css';
import './custom.css';

const Hero = () => {
  return (
    <div className="hero">
      <Container className="text-center">
        <h1>Welcome to Sahyadri Cafe</h1>
        <p>Your one-stop solution for delicious meals on campus.</p>
        <Button className='custom-button' href="/menu">View Menu</Button>
      </Container>
    </div>
  );
};

export default Hero;
