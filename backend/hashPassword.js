// hashPassword.js
import bcrypt from "bcryptjs";

const hashPassword = async () => {
  const password = "admin123"; // Replace with your desired admin password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password:", hashedPassword);
};

hashPassword();
