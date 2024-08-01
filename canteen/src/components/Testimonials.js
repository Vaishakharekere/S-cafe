
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './styles/Testimonials.css';
import './custom.css';

const Testimonials = () => {
  const [reviews, setReviews] = useState([
    { text: '"Great food and excellent service!"', author: 'Student A' },
    { text: '"The best canteen experience on campus."', author: 'Staff B' },
  ]);
  const [newReview, setNewReview] = useState({ text: '', author: '' });

  const handleAddReview = (event) => {
    event.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ text: '', author: '' });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewReview({ ...newReview, [name]: value });
  };

  return (
    <Container className="testimonials my-5">
      <h2 className="text-center">Testimonials</h2>
      {reviews.map((review, index) => (
        <blockquote key={index} className="blockquote text-center">
          <p className="mb-0">{review.text} - {review.author}</p>
        </blockquote>
      ))}
      <Form onSubmit={handleAddReview}>
        <Form.Group controlId="reviewText">
          <Form.Label>Write a review:</Form.Label>
          <Form.Control
            type="text"
            name="text"
            value={newReview.text}
            onChange={handleInputChange}
            placeholder="Enter your review"
          />
        </Form.Group>
        <Form.Group controlId="reviewAuthor">
          <Form.Label>Your name:</Form.Label>
          <Form.Control
            type="text"
            name="author"
            value={newReview.author}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </Form.Group>
        <Button className='custom-button' type="submit">
          Add Review
        </Button>
      </Form>
    </Container>
  );
};

export default Testimonials;