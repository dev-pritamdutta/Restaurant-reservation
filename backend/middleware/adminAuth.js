import jwt from "jsonwebtoken";
const adminAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res
        .status(403)
        .json({ success: false, message: "Access denied, admin only" });
    }

    req.user = decoded; // Attach user info to the request object
    next();
  } catch (error) {
    console.error("Error in adminAuth middleware:", error);
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export default adminAuth;
