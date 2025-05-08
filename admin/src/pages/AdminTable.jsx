import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { MdDeleteForever } from "react-icons/md";

const AdminTable = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(backendUrl + "/api/reservations/get");
        setReservations(response.data.reservations);
        console.log(response.data.reservations);
      } catch (error) {
        console.log("Error fetching reservations:", error.message);
      }
    };
    fetchReservations();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl mx-auto w-2/5 rounded-xl bg-blue-600 text-white p-5  font-bold text-center  mb-6">
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
              reservations.map((res, index) => (
                <tr
                  key={index}
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
                      className="flex items-center gap-2 text-white cursor-pointer font-medium bg-blue-600 px-3 py-1 rounded-lg transition duration-200"
                      onClick={() => console.log("Delete reservation:", res.id)}
                    >
                      <MdDeleteForever size={20} className="text-red-400" />
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
