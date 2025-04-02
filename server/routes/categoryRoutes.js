const express = require("express");
const { createCategory, getCategories } = require("../controllers/categoryController");
const router = express.Router();

router.post("/Createcategories", createCategory);
router.get("/getAllcategories", getCategories);

module.exports = router;
