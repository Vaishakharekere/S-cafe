// src/pages/UserDashboard.js
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { getOrders } from '../services/api';
import '../components/styles/UserDashboard.css';

const UserDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders when component mounts
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Container className="user-dashboard">
      <h1>User Dashboard</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.item}</td>
              <td>{order.quantity}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserDashboard;
