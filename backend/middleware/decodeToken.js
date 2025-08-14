const jwt = require("jsonwebtoken");
require("dotenv").config();

const decodeToken = (req, res, next) => {
  const SECRETKEY = process.env.JWT_SECRET;
  // console.log(req);
  console.log("SECRETKEY", SECRETKEY, req.cookies.authToken);
  let token = req.cookies?.authToken || null;
  console.log("cookie", req.cookies, token);
  console.log(!token);

  // Still no token? Unauthorized
  if (!token) {
    return res.status(401).json({ message: "Token missing or malformed" });
  }

  try {
    const decoded = jwt.verify(token, SECRETKEY); // Will throw if expired or invalid
    req.user = decoded; // Attach user info to request
    next(); // Move to next middleware
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Forbidden - Invalid or expired token" });
  }
};

module.exports = decodeToken;
