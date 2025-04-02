const MenuCategory = require("../models/categoryModel");

// Create a new category
const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newCategory = new MenuCategory({ name, description });
        await newCategory.save();
        res.status(201).json({ message: "Category created successfully", category: newCategory });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all categories
const getCategories = async (req, res) => {
    try {
        const categories = await MenuCategory.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createCategory, getCategories };
