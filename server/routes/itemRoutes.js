const express = require("express");
const { createItem, getItems } = require("../controllers/itemController");
const router = express.Router();

router.post("/Createitems", createItem);
router.get("/Getitems", getItems);

module.exports = router;
