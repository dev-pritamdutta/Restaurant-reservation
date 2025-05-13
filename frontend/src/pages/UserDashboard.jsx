import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const UserDashboard = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user reservations
  const fetchReservations = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://restaurant-reservation-1-dscy.onrender.com/api/reservations/get-user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setReservations(response.data.reservations);
      setLoading(false);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to fetch reservations"
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      {loading ? (
        <p>Loading your reservations...</p>
      ) : reservations.length > 0 ? (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Time</th>
              <th className="border border-gray-300 px-4 py-2">Guests</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation._id}>
                <td className="border border-gray-300 px-4 py-2">
                  {reservation.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {reservation.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {reservation.phone}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {reservation.date}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {reservation.time}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {reservation.guests}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No reservations found</p>
      )}
    </div>
  );
};

export default UserDashboard;
