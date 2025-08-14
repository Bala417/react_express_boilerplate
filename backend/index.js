// index.js
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const cors = require("cors");
const app = express();
const PORT = 3000;
const cookieParser = require("cookie-parser");

// model initialization

const User = require("./models/User");
const Task = require("./models/Task");

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("MySQL connected");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

// Sync the database
sequelize
  .sync({ alter: false })
  .then(() => console.log("Database synced"))
  .catch((err) => console.log("Error: " + err));

// Sample route
app.get("/test", (req, res) => {
  return res.send("Hello World!");
});

// User routes
app.use("/user", require("./routes/userRoutes"));
app.use("/auth", require("./routes/authRoutes"));
app.use("/task", require("./routes/taskRoutes"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
