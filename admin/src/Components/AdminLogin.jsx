import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://restaurant-reservation-1-dscy.onrender.com/api/auth/login", formData);
      const { token, role } = response.data;

      if (role !== "admin") {
        toast.error("Access denied. Admins only.");
        return;
      }

      // Save token to localStorage
      localStorage.setItem("token", token);

      toast.success("Admin login successful!");
      navigate("/admin-dashboard"); // Redirect to admin dashboard
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;