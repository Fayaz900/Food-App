require("dotenv").config(); // Load environment variables
const express = require("express");
const { connectMongoDb } = require("./Db/connectDb"); // Import DB connection function

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectMongoDb()
  .then(() => console.log("✅ MongoDB Connection Successful"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Middleware
app.use(express.json());

// Sample Route
app.get("/", (req, res) => {
  res.send("Server is running and connected to MongoDB!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
