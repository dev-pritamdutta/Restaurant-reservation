import axios from "axios";
import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaReddit } from "react-icons/fa";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ReservationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    guests: "",
    date: new Date().toISOString().slice(0, 10),
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 21; hour++) {
      slots.push(`${hour}:00`, `${hour}:30`);
    }
    return slots;
  };

  const guestOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // Retrieve the token from localStorage
      if (!token) {
        toast.error("You must be logged in to make a reservation.");
        return;
      }

      await axios.post(backendUrl + "/api/reservations/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the Authorization header
        },
      });

      toast.success("Reservation made successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: new Date().toISOString().slice(0, 10),
        time: "",
        guests: "",
      });
      navigate("/user-dashboard"); // Redirect to User Dashboard
    } catch (error) {
      console.error("Error making reservation:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to make reservation. Please try again."
      );
    }
  };

  return (
    <div className=" container w-full mx-auto p-6 bg-amber-100 shadow-md gap-5 rounded-md flex items-center justify-between">
      {/* form data */}
      <div className="bg-white p-10 rounded-md shadow-md w-4/6">
        <h2 className="text-3xl text-center  font-bold text-blue-400 mb-4">
          Make a Reservation
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className=" grid gap-4 grid-cols-1 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChanges}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChanges}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChanges}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Reservation Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChanges}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Time of Reservation
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChanges}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select a time</option>
                {generateTimeSlots().map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Number of Guests
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChanges}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select number of guests</option>
                {guestOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Book Now
          </button>
        </form>
      </div>
      {/* address data */}

      <div className="mt-4 w-2/6 text-center rounded-lg p-10  ">
        <div className="bg-black text-white p-4 rounded-md space-y-2">
          <p className="text-2xl font-bold mb-2">Contact Us</p>
          <p>Address: 123 Main St, Anytown, USA</p>
          <p>Phone: 555-555-5555</p>
          <p>
            Email:{" "}
            <a href="mailto:dev.pritamdutta.com" className="text-white">
              dev.pritamdutta@gmail.com
            </a>
          </p>
        </div>
        <div className="flex justify-center mt-2">
          <a href="#" className="mr-2">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="mr-2">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="mr-2">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="mr-2">
            <FaReddit size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
