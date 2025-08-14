// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const decodeToken = require("../middleware/decodeToken");

router.get("/fetch_all", decodeToken, taskController.fetchAllTask);

module.exports = router;
