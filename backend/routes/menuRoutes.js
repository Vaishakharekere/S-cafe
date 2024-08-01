const express = require('express');
const router = express.Router();
const { getMenuItems, addMenuItem, updateMenuItem, deleteMenuItem } = require('../controllers/menuController');
const { verifyToken ,isAdmin} = require('../middleware/authMiddleware'); // Ensure correct import

// Middleware to ensure the user is authenticated
router.use(verifyToken); // Add this line

// Middleware to ensure the user is an admin
router.use(isAdmin); // Ensure `isAdmin` is defined in authMiddleware

router.get('/', getMenuItems); // Get all menu items
router.post('/', addMenuItem); // Add a new menu item
router.put('/:id', updateMenuItem); // Update an existing menu item
router.delete('/:id', deleteMenuItem); // Delete a menu item

module.exports = router;
