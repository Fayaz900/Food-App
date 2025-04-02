require("dotenv").config();
const cors = require("cors");
const express = require("express");
const categoryRoutes = require("./routes/categoryRoutes");
const itemRoutes = require("./routes/itemRoutes");


const app = express();
app.use(cors({
  origin:"https://food-app-client.vercel.app/",
}));

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
module.exports={app}
