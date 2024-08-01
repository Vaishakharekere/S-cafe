import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { createOrder } from '../services/api';
import '../components/styles/Order.css';

const Order = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    item: '',
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Assume userToken is stored in localStorage after login
    const userToken = localStorage.getItem('userToken');
    try {
      const response = await createOrder(orderDetails, userToken);
      console.log('Order details:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container className="order-container">
      <h1>Place Your Order</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={orderDetails.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group controlId="formItem">
          <Form.Label>Item</Form.Label>
          <Form.Control
            type="text"
            name="item"
            value={orderDetails.item}
            onChange={handleChange}
            placeholder="Enter item name"
          />
        </Form.Group>

        <Form.Group controlId="formQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            value={orderDetails.quantity}
            onChange={handleChange}
            min="1"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit Order
        </Button>
      </Form>
    </Container>
  );
};

export default Order;
