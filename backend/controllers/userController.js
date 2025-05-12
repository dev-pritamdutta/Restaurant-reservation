import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Admin Login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign({ email, role: "admin" }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({ success: true, message: "Admin login successful", token });
    } else {
      res.status(401).json({ success: false, message: "Invalid login details" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// User Registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// User Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }

    // Generate JWT token
const token = jwt.sign({ email, role: "admin" }, process.env.JWT_SECRET, {
  expiresIn: "1h",
});

    res.json({
      success: true,
      message: "Login successful",
      token,
      role: user.role, // Include the role in the response
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export { adminLogin, registerUser, loginUser };