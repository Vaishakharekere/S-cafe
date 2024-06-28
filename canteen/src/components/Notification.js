// src/components/Notification.js

import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const Notification = ({ variant, message, onClose }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    if (onClose) onClose();
  };

  return (
    <>
      {show && (
        <Alert variant={variant} onClose={handleClose} dismissible>
          {message}
        </Alert>
      )}
    </>
  );
};

export default Notification;
