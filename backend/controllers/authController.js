// controllers/userController.js
const User = require("../models/User");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

// Create a new user
const login = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: "userNotFound" });
    }
    const isPasswordMatch = user.password === password;
    console.log("isPasswordMatch", isPasswordMatch);
    if (!isPasswordMatch) {
      console.log("password do not match");
      return res
        .status(404)
        .json({ success: false, message: "passwordNotMatch" });
    }
    const token = jwt.sign(
      {
        userRole: user.role,
        userName: user.username,
        userId: user.user_id,
      },
      JWT_SECRET,
      { expiresIn: "3h" }
    );
    // console.log(process.env.NODE_ENV);
    // console.log(process.env.NODE_ENV === "production");
    return res
      .cookie("authToken", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production" ? true : false,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        userRole: user.role,
        userName: user.username,
        userId: user.user_id,
        token: token,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const verifyAuth = (req, res) => {
  const token = req.cookies?.authToken;
  console.log("token", token);
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const verifyToken = jwt.verify(token, JWT_SECRET);
    return res.status(200).json({ message: verifyToken });
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

const logout = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.cookies);

    res.clearCookie("authToken", {
      httpOnly: true,
      sameSite: "lax",
      secure: true,
    });
    res.status(200).json({ message: "Logged out" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  login,
  verifyAuth,
  logout,
};
