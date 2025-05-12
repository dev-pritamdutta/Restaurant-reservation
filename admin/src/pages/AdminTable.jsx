import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const AdminTable = ({ token }) => {
  const [reservations, setReservations] = useState([]);

  // Fetch reservations
  const fetchReservations = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the token
      const response = await axios.get(`${backendUrl}/api/reservations/get`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
      });
      setReservations(response.data.reservations); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  // Delete a reservation
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendUrl}/api/reservations/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setReservations((prev) => prev.filter((res) => res._id !== id)); // Remove deleted reservation
      toast.success("Reservation deleted successfully!");
    } catch (error) {
      console.error("Error deleting reservation:", error);
      toast.error("Failed to delete reservation. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl mx-auto w-2/5 rounded-xl bg-blue-600 text-white p-5 font-bold text-center mb-6">
        Restaurant Reservations
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Time</th>
              <th className="py-3 px-3 text-left">Guests</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {reservations.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="py-4 px-6 text-center text-gray-500 italic"
                >
                  No reservations found
                </td>
              </tr>
            ) : (
              reservations.map((res) => (
                <tr
                  key={res._id}
                  className="border-b hover:bg-blue-300 transition duration-200"
                >
                  <td className="py-3 px-6 text-gray-800 font-medium">
                    {res.name}
                  </td>
                  <td className="py-3 px-6 text-gray-700">{res.email}</td>
                  <td className="py-3 px-6 text-gray-700">{res.phone}</td>
                  <td className="py-3 px-6 text-gray-700">{res.date}</td>
                  <td className="py-3 px-6 text-gray-700">{res.time}</td>
                  <td className="py-3 px-6 text-gray-700">{res.guests}</td>
                  <td className="py-3 px-0">
                    <button
                      onClick={() => handleDelete(res._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
