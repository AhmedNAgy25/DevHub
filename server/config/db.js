const mongoose = require("mongoose");

const connectDB = async () => {
  const dbConnectionString =
    "mongodb+srv://serverDevhub:v98BAwpJVgOld2aa@cluster0.xoo8rtj.mongodb.net/devhubDB?retryWrites=true&w=majority&appName=Cluster0";
  try {
    await mongoose.connect(dbConnectionString);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
