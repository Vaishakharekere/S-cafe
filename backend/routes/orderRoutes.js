const express = require('express');
const { createOrder, getOrders, updateOrder, deleteOrder } = require('../controllers/orderController');
const { verifyToken } = require('../middleware/authMiddleware');
const router = express.Router();

// Check if functions are defined
if (!createOrder || !getOrders || !updateOrder || !deleteOrder) {
    throw new Error('One or more controller functions are undefined.');
}
router.post('/', verifyToken, createOrder);
router.get('/', verifyToken, getOrders);
router.put('/:id', verifyToken, updateOrder);
router.delete('/:id', verifyToken, deleteOrder);

module.exports = router;
