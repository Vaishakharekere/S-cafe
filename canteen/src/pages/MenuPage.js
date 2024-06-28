// src/components/Menu.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/styles/Menu.css';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';

const menuData = [
  {
    id: 1,
    name: 'Paneer butter masala',
    description: 'Paneer butter masala spicy gravy',
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
  },
  {
    id: 4,
    name: 'sandwich',
    description: 'spicy mix sandwich',
    price: 8.99,
    image: 'sandwich.jpg'
  },
  {
    id: 5,
    name: 'Roti',
    description: 'Fresh mixed gravy with tasty Rotis',
    price: 8.99,
    image: 'item5.jpeg'
  },
  {
    id: 6,
    name: 'Paneer Masala',
    description: 'Fresh mixed paneer',
    price: 8.99,
    image: 'item6.jpeg'
  },
  {
    id: 7,
    name: 'Pani puri',
    description: 'Delicious spicy pani puri',
    price: 5,
    image: 'item7.jpeg'
  },
  {
    id: 8,
    name: 'kaju masala',
    description: 'Fresh mixed gravy with kaju and spics',
    price: 10.99,
    image: 'item8.jpeg'
  },
  {
    id: 9,
    name: 'Gobi manchurian',
    description: 'Fresh mixed Gobi manchurian',
    price: 13.99,
    image: 'item9.jpeg'
  },
  {
    id: 10,
    name: 'Oreo Milkshake',
    description: 'Fresh juice prepared from oreo and flavours',
    price: 4.99,
    image: 'item10.jpeg'
  }
];

const Menu = () => {
  return (
    <Container>
      <h2 className="mb-4 text-center">Menu</h2>
      <Row>
        {menuData.map(item => (
          <Col key={item.id} xs={12} md={4} lg={3}>
            <Card className="fixed-card-height">
              <Image src={item.image} alt={item.name} className="fixed-dimensions" fluid />
              <Card.Body className="fixed-card-body">
                <div>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </div>
                <div>
                  <Card.Text>
                    <strong>${item.price}</strong>
                  </Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
