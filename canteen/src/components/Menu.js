// src/components/Menu.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Menu.css';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const menuData = [
  {
    id: 1,
    name: 'Burger',
    description: 'Juicy beef burger with lettuce, tomato, and cheese',
    price: 10.99,
    image: 'special1.jpg'
  },
  {
    id: 2,
    name: 'Pizza',
    description: 'Freshly baked pizza with mozzarella cheese and tomato sauce',
    price: 12.99,
    image: 'special2.jpg'
  },
  {
    id: 3,
    name: 'Salad',
    description: 'Fresh mixed greens with cherry tomatoes and balsamic vinaigrette',
    price: 8.99,
    image: 'special3.jpg'
  }
];

const Menu = () => {
  return (
    <Container>
      <h2 className="text-center">Menu</h2>
      <Row>
        {menuData.map(item => (
          <Col key={item.id} xs={12} md={4} lg={3}>
            <Card>
              <Image src={item.image} alt={item.name} fluid />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>
                  <strong>${item.price}</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;