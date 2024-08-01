import axios from 'axios';

// Define the base URL for the API
const API_URL = 'http://localhost:5001'; // Replace with your backend URL

// Authentication functions
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Menu functions
export const getMenuItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/menu`);
    return response.data;
  } catch (error) {
    console.error('Error fetching menu items:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const addMenuItem = async (menuItem) => {
  try {
    const response = await axios.post(`${API_URL}/menu`, menuItem);
    return response.data;
  } catch (error) {
    console.error('Error adding menu item:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const deleteMenuItem = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/menu/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting menu item:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const updateMenuItem = async (id, updatedItem) => {
  try {
    const response = await axios.put(`${API_URL}/menu/${id}`, updatedItem);
    return response.data;
  } catch (error) {
    console.error('Error updating menu item:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Order functions
export const getOrders = async () => {
  try {
    const response = await axios.get(`${API_URL}/order`);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Create an order function
export const createOrder = async (orderData, token) => {
  try {
    const response = await axios.post(`${API_URL}/order`, orderData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error.response ? error.response.data : error.message);
    throw error;
  }
};
