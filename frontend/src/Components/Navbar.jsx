import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role"); // Retrieve the user's role from localStorage

  // Debugging logs
  // console.log("Token in Local Storage:", localStorage.getItem("token"));
  // console.log("Role in Local Storage:", localStorage.getItem("role"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role"); // Remove the role on logout
    navigate("/login");
  };

  const navItems = () => (
    <div className="text-[18px] flex">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/reservation">Reservation</Link>
      </li>

      {token ? (
        <>
          <li>
            <Link to="/user-dashboard">User Dashboard</Link>
          </li>
          {role === "admin" && ( // Only show Admin Dashboard for admin users
            <li>
              <a
                // href="https://restaurant-reservation-sepia.vercel.app"
                href="http://localhost:5174/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Admin Dashboard
              </a>
            </li>
          )}
          <li>
            <button onClick={handleLogout} className="text-red-500">
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </>
      )}
    </div>
  );

  return (
    <div className="navbar bg-black text-white shadow-sm min-h-20 lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu gap-3 cursor-pointer menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems()}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-3xl uppercase">
          Chillox Restro
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems()}</ul>
      </div>
    </div>
  );
};

export default Navbar;
