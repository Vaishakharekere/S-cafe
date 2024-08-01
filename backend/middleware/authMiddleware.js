const jwt = require('jsonwebtoken');
const User = require('../models/User');

const verifyToken = async (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.user.id);

        if (!user) return res.status(404).json({ msg: 'User not found' });

        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ msg: 'Access denied' });
    }
    next();
};

const Joi = require('joi');

const menuItemSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().optional(),
    price: Joi.number().required(),
    image: Joi.string().optional(),
});

exports.validateMenuItem = (req, res, next) => {
    const { error } = menuItemSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = { verifyToken, isAdmin };
