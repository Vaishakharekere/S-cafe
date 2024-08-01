const express = require('express');
const { getHomePage } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);

module.exports = router;
