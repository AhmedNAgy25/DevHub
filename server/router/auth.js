const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send(`auth route`));

module.exports = router;
