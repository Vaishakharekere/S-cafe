// src/components/Loading.js
import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => (
  <div className="text-center">
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);

export default Loading;
