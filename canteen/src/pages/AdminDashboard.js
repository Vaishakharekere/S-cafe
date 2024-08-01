import React, { useEffect, useState } from 'react';
import { Container, Button, Form, Table } from 'react-bootstrap';
import { getMenuItems, addMenuItem, deleteMenuItem, updateMenuItem } from '../services/api';
import '../components/styles/AdminDashboard.css'; // Ensure this file exists

const AdminDashboard = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  useEffect(() => {
    // Fetch menu items when component mounts
    const fetchMenuItems = async () => {
      try {
        const items = await getMenuItems();
        setMenuItems(items);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  const handleAddItem = async () => {
    try {
      await addMenuItem(newItem);
      // Refresh the list after adding
      const items = await getMenuItems();
      setMenuItems(items);
    } catch (error) {
      console.error('Error adding menu item:', error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteMenuItem(id);
      // Refresh the list after deletion
      const items = await getMenuItems();
      setMenuItems(items);
    } catch (error) {
      console.error('Error deleting menu item:', error);
    }
  };

  const handleUpdateItem = async (id, updatedItem) => {
    try {
      await updateMenuItem(id, updatedItem);
      // Refresh the list after update
      const items = await getMenuItems();
      setMenuItems(items);
    } catch (error) {
      console.error('Error updating menu item:', error);
    }
  };

  return (
    <Container>
      <h1>Admin Dashboard</h1>
      <Form>
        {/* Form to add a new menu item */}
        <Form.Group controlId="formNewItem">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            placeholder="Item name"
          />
        </Form.Group>

        <Form.Group controlId="formNewDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={newItem.description}
            onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
            placeholder="Item description"
          />
        </Form.Group>

        <Form.Group controlId="formNewPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            placeholder="Item price"
          />
        </Form.Group>

        <Form.Group controlId="formNewImage">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            value={newItem.image}
            onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
            placeholder="Item image URL"
          />
        </Form.Group>

        <Button variant="primary" onClick={handleAddItem}>
          Add Menu Item
        </Button>
      </Form>

      <h2 className="mt-4">Menu Items</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map(item => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${item.price}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteItem(item._id)}>
                  Delete
                </Button>
                {/* Add more actions if needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminDashboard;
