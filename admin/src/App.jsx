import React, { useEffect, useState } from "react";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddMenu from "./pages/AddMenu";
import ListMenu from "./pages/ListMenu";
import AdminTable from "./pages/AdminTable";

export const backendUrl = "https://restaurant-reservation-1-dscy.onrender.com";

const App = () => {
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null
  );
  const navigate = useNavigate();

  // Debugging logs
  // console.log("Token in Local Storage:", localStorage.getItem("token"));
  // console.log("Role in Local Storage:", localStorage.getItem("role"));

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true }); // Redirect to login if no token
    } else {
      localStorage.setItem("token", token); // Save token to localStorage
    }
  }, [token, navigate]);

  const handleLogout = () => {
    setToken(null); // Clear token from state
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/login", { replace: true }); // Redirect to login
  };

  return (
    <div>
      <ToastContainer />
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <div className="flex">
          <Sidebar setToken={setToken} onLogout={handleLogout} />
          <div className="flex-grow">
            <Routes>
              <Route path="/add" element={<AddMenu token={token} />} />
              <Route path="/list" element={<ListMenu token={token} />} />
              <Route path="/table" element={<AdminTable token={token} />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
