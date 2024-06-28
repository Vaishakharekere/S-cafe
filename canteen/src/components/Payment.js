// src/components/Payment.js

import React, { useState } from 'react';
import { processPayment } from '../services/paymentService';
import './styles/Payment.css';

const Payment = ({ order }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await processPayment({ ...paymentDetails, orderId: order.id });
      // Handle payment success
    } catch (error) {
      console.error('Payment failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Payment</h2>
      <input type="text" value={paymentDetails.cardNumber} onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })} placeholder="Card Number" required />
      <input type="text" value={paymentDetails.expiryDate} onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })} placeholder="Expiry Date" required />
      <input type="text" value={paymentDetails.cvv} onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })} placeholder="CVV" required />
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default Payment;
