const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  const dbConnectionString = process.env.DB_CONNECTION_STRING;

  try {
    await mongoose.connect(dbConnectionString);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
