const express = require('express');
const { createFeedback, getFeedbacks } = require('../controllers/feedbackController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, createFeedback);
router.get('/', verifyToken, isAdmin, getFeedbacks);

module.exports = router;
