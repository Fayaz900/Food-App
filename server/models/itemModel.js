const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "MenuCategory", required: true }
}, { timestamps: true });

module.exports = mongoose.model("MenuItem", itemSchema);
