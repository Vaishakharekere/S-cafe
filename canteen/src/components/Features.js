import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/Features.css';

const Features = () => {
  return (
    <Container className="features">
      <h2 className="text-center my-5">Our Features</h2>
      <Row>
        <Col md={3} className="text-center">
          <h3>Online Ordering</h3>
          <p>Order your favorite meals online and skip the queue.</p>
        </Col>
        <Col md={3} className="text-center">
          <h3>Secure Payments</h3>
          <p>Pay securely through various online payment methods.</p>
        </Col>
        <Col md={3} className="text-center">
          <h3>Real-time Tracking</h3>
          <p>Track your order status in real-time.</p>
        </Col>
        <Col md={3} className="text-center">
          <h3>Table Booking</h3>
          <p>Book your Table in Advance.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
