import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "../components/styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
     ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
    console.log("Login form data:", formData);
  };

  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container className="login-container">
      <Form onSubmit={handleSubmit}>
        <h1>{isLogin? "Login" : "Register"}</h1>
        {isLogin? (
          <>
            <Form.Check
              inline 
              
              type="radio"
              label="Admin "
              name="radioGroup"
              id="option1"
            />
            <Form.Check  
              inline
              type="radio"
              label="Student/Staff"
              name="radioGroup"
              id="option2"
            />
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
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
              />
            </Form.Group>
          </>
        ) : (
          <>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
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
              />
            </Form.Group>
          </>
        )}

        <Button variant="primary" type="submit">
          {isLogin? "Login" : "Register"}
        </Button>
        <p>
          {isLogin
           ? "Don't have an account? "
            : "Already have an account? "}
          <Button variant="link" onClick={toggleForm}>
            {isLogin? "Register" : "Login"}
          </Button>
        </p>
      </Form>
    </Container>
  );
};

export default Login;