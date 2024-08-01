const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
require('dotenv').config();

// Predefined admin credentials (hashed)
const ADMIN_CREDENTIALS = {
  email: 'vaishakh.cs22@sahyadri.edu',
  password: '12345678' // Store hashed password in an environment variable
};

// Login controller
// Login controller
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Check for admin credentials
  if (email === ADMIN_CREDENTIALS.email) {
    const isValidAdmin = await bcrypt.compare(password, ADMIN_CREDENTIALS.password);
    if (isValidAdmin) {
      const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.json({ token });
    }
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
console.log(password);
console.log(password);
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid  password' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Register controller
exports.register = async (req, res) => {
  const { email, password, role } = req.body;

  // Prevent admin registration
  if (role === 'admin') {
    return res.status(403).json({ message: 'Admin registration is not allowed' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    //console.log(password+" "+hashedPassword)
    const user = new User({ email, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(500).json({ message: 'Server error' });
  }
};