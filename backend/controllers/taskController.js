// controllers/userController.js
const User = require("../models/User");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

// Create a new user
const fetchAllTask = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req);
    console.log("Cookies:", req.cookies); // should log { authToken: "..." }
    res.json({ tasks: [] });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  fetchAllTask,
};
