const express = require("express");

const app = express();

app.get("/", (req, res) => res.send(`Server is working correctly`));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`All is good`);
});
