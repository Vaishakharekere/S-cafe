import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './styles/Specials.css';

const Specials = () => {
  return (
    <Container className="specials my-5">
      <h2 className="text-center">Daily Specials</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Img variant="top" src="special1.jpg" />
            <Card.Body>
              <Card.Title>Special Dish 1</Card.Title>
              <Card.Text>Description of special dish 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Img variant="top" src="special2.jpg" />
            <Card.Body>
              <Card.Title>Special Dish 2</Card.Title>
              <Card.Text>Description of special dish 2.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Specials;
