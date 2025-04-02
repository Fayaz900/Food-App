require("dotenv").config(); 

const mongoose = require("mongoose");

const connectMongoDb = async () => {
    const mongoUri = process.env.MONGO_URL; 

    if (!mongoUri) {
        console.error("❌ MONGO_URL is missing in .env file!");
        process.exit(1); 
    }

    await mongoose.connect(mongoUri, {})
        .then((data) => {
            console.log(`✅ MongoDB Connected to: ${data.connection.host}`);
        })
        .catch((err) => {
            console.error("❌ MongoDB Connection Error:", err);
            process.exit(1); 
        });
};

module.exports = { connectMongoDb };
