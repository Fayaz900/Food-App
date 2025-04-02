const MenuItem = require("../models/itemModel");
const MenuCategory = require("../models/categoryModel");

// Create a new menu item
const createItem = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;

        // Ensure category exists
        const categoryExists = await MenuCategory.findById(category);
        if (!categoryExists) {
            return res.status(404).json({ error: "Category not found" });
        }

        const newItem = new MenuItem({ name, description, price, category });
        await newItem.save();
        res.status(201).json({ message: "Item created successfully", item: newItem });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all items (with category names)
const getItems = async (req, res) => {
    try {
        const items = await MenuItem.find().populate("category", "name");
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createItem, getItems };
