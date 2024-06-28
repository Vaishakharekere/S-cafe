import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './styles/Specials.css';

const Specials = () => {
  return (
    <Container className="specials my-5">
      <h2 className="text-center">Daily Specials</h2>
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="special4.jpeg" />
            <Card.Body>
              <Card.Title>Paneer Butter Masala</Card.Title>
              <Card.Text>Paneer Butter Masala is a rich and creamy North Indian curry made with paneer in a spiced tomato and butter gravy.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="special2.jpg" />
            <Card.Body>
              <Card.Title>Chicken Kabab Rice</Card.Title>
              <Card.Text>Grilled Chicken Kababs served over fragrant, spiced rice, often accompanied by a variety of sauces and fresh garnishes.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="special3.jpg" />
            <Card.Body>
              <Card.Title>Hyderbadi Dum Biryani</Card.Title>
              <Card.Text> Flavorful rice dish made with basmati rice, marinated meat,cooked together in a sealed pot using the traditional dum method.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Specials;
