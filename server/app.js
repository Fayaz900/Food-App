require("dotenv").config();
const express = require("express");
const { connectMongoDb } = require("./Db/connectDb"); 
const categoryRoutes = require("./routes/categoryRoutes");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
const PORT = process.env.PORT || 5000;


connectMongoDb()
  .then(() => console.log("✅ MongoDB Connection Successful"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Middleware
app.use(express.json());

// Sample Route
app.get("/", (req, res) => {
  res.send("Server is running and connected to MongoDB!");
});

// Routes
app.use("/api", categoryRoutes);
app.use("/api", itemRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
