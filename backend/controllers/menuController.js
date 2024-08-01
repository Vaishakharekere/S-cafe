const Menu = require('../models/MenuItems');

// Get all menu items
exports.getMenuItems = async (req, res) => {
    try {
        const items = await Menu.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Add a new menu item
exports.addMenuItem = async (req, res) => {
    const { name, description, price, image } = req.body;
    try {
        const newItem = new Menu({ name, description, price, image });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update a menu item
exports.updateMenuItem = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, image } = req.body;
    try {
        const updatedItem = await Menu.findByIdAndUpdate(id, { name, description, price, image }, { new: true });
        res.json(updatedItem);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a menu item
exports.deleteMenuItem = async (req, res) => {
    const { id } = req.params;
    try {
        await Menu.findByIdAndDelete(id);
        res.json({ message: 'Menu item deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
