const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// get user request
// validate request body
// if user exist return error
// encrypt password
// save data on DB
// creat user id toke [JWT] then return token

router.post(
  "/",
  check("name", "please enter your name").notEmpty(),
  check("email", "please enter correct email").isEmail(),
  check("password", "please enter your password").notEmpty(),
  check("password", "please enter strong password").isStrongPassword(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password, date } = req.body;
    // res.send("Successfull sending data");
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "user already exist" }] });
      }
      user = new User({
        name,
        email,
        password,
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };
      const secretKey = process.env.SECRET_KEY;
      console.log(secretKey);
      jwt.sign(payload, secretKey, { expiresIn: "7d" }, (err, token) => {
        if (err) {
          throw err;
        } else {
          res.json({ token });
        }
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send(err.message);
    }
  }
);

module.exports = router;
