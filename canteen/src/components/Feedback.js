// src/components/Feedback.js

import React, { useState } from 'react';
import { submitFeedback } from '../services/feedbackService';
import './styles/Feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    rating: 0,
    comment: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitFeedback(feedback);
      // Handle feedback success
    } catch (error) {
      console.error('Feedback submission failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Feedback</h2>
      <input type="number" value={feedback.rating} onChange={(e) => setFeedback({ ...feedback, rating: e.target.value })} placeholder="Rating (1-5)" required />
      <textarea value={feedback.comment} onChange={(e) => setFeedback({ ...feedback, comment: e.target.value })} placeholder="Comment" required />
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default Feedback;
