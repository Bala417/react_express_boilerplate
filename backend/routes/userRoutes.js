// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/create", userController.createUser);
router.get("/get-all", userController.getAllUsers);
router.get("/get/:id", userController.getUserById);
router.put("/update/:id", userController.updateUserById);
router.delete("/del/:id", userController.deleteUserById);

module.exports = router;
