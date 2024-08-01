import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../components/styles/Login.css';
import '../components/custom.css'
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRoleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      role: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:5001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }
  
      const data = await response.json();
      console.log('Login successful:', data);
      // Save token to localStorage or context
      localStorage.setItem('token', data.token);
      // Redirect or update UI
    } catch (error) {
      console.error('Error during login:', error);
      setError(error.message);
    }
  };

  return (
    <Container className="login-container">
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form.Group controlId="formRole">
          <Form.Label>Role</Form.Label>
          <div className="role-options">
            <Form.Check
              type="radio"
              label="Admin"
              value="admin"
              checked={formData.role === 'admin'}
              onChange={handleRoleChange}
              name="role"
              inline
            />
            <Form.Check
              type="radio"
              label="Student/Staff"
              value="student"
              checked={formData.role === 'student'}
              onChange={handleRoleChange}
              name="role"
              inline
            />
          </div>
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </Form.Group>

        <Button className='custom-button' type="submit">
          Login
        </Button>
        <div className="register-link">
          <p>Don't have an account?</p>
          <Link to="/register">Register here</Link>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
