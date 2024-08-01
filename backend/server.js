const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');
const dbConfig = require('./config/db');

// Initialize Express app
const app = express();

// Connect to MongoDB
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch(err => {
    console.error('Could not connect to the database. Exiting now...', err);
    process.exit(1);
  });

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/menu', menuRoutes);
app.use('/order', orderRoutes);

// Port configuration
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
