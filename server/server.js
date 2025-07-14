const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json())

app.use("/api/users", require("./router/users"));
app.use("/api/auth", require("./router/auth"));
app.use("/api/posts", require("./router/posts"));
app.use("/api/profile", require("./router/profile"));

connectDB();



const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`All is good`);
});
