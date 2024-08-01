// src/services/paymentService.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/payment';

export const processPayment = (paymentDetails) => {
  return axios.post(API_URL, paymentDetails);
};
