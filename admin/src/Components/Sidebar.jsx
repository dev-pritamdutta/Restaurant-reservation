import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaHome,
  FaPlus,
  FaList,
  FaCalendarAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ setToken }) => {
  return (
    <div className="w-64 bg-gray-800 h-screen text-gray-200">
      <h2 className="text-center py-5 border-b border-gray-700 text-xl font-semibold">
        Admin Panel
      </h2>
      <nav className="flex flex-col p-5 space-y-3">
        <a
          href="https://restaurant-reservation-qh7t.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
        >
          <FaHome className="mr-3" />
          Main Homepage
        </a>
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-gray-700 text-green-400"
                : "hover:bg-gray-700 hover:text-white"
            }`
          }
        >
          <FaPlus className="mr-3" />
          Add Menu
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-gray-700 text-green-400"
                : "hover:bg-gray-700 hover:text-white"
            }`
          }
        >
          <FaList className="mr-3" />
          Menu List
        </NavLink>
        <NavLink
          to="/table"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-gray-700 text-green-400"
                : "hover:bg-gray-700 hover:text-white"
            }`
          }
        >
          <FaCalendarAlt className="mr-3" />
          Reservations
        </NavLink>
        <button
          onClick={() => setToken("")}
          className="flex items-center px-4 py-2 mt-auto bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700"
        >
          <FaSignOutAlt className="mr-3" />
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
