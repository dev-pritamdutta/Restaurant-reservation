import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization; // Get the Authorization header
  // console.log("Authorization Header:", authHeader); // Debugging log

  const token = authHeader && authHeader.split(" ")[1]; // Extract the token
  // console.log("Extracted Token:", token); // Debugging log

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    // console.log("Decoded Token:", decoded); // Debugging log

    if (decoded.role !== "admin") {
      return res
        .status(403)
        .json({ success: false, message: "Forbidden: Admins only" });
    }

    req.user = decoded; // Attach the decoded token to the request object
    next();
  } catch (error) {
    console.error("Token Verification Error:", error); // Debugging log
    res
      .status(401)
      .json({ success: false, message: "Unauthorized: Invalid token" });
  }
};

export default adminAuth;
