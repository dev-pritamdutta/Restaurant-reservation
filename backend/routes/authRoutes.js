import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// User registration route
router.post("/register", registerUser);

// User login route
router.post("/login", loginUser);

// Admin-only route example
router.get("/admin-data", protect, adminOnly, (req, res) => {
  res.json({ success: true, message: "Welcome, Admin!" });
});

// User-only route example
router.get("/user-data", protect, (req, res) => {
  res.json({ success: true, message: "Welcome, User!" });
});

export default router;
