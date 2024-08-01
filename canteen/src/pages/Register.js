import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../components/styles/Register.css';
import '../components/custom.css'
const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    setSuccessMessage(''); // Reset success message

    try {
      const response = await fetch('http://localhost:5001/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      setSuccessMessage('Registration successful! Please log in.'); // Set success message
      // Redirect to login page after a short delay
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error('Error during registration:', error);
      setError(error.message); // Set error message
    }
  };

  return (
    <Container className="register-container">
      <Form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        
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
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;