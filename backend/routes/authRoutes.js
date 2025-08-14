// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const decodeToken = require("../middleware/decodeToken");

router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.get("/verify", authController.verifyAuth);

module.exports = router;
