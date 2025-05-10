import reservationModels from "../models/reservationModels.js";
const createReservation = async (req, res) => {
  try {
    const { name, email, phone, date, time, guests } = req.body;
    const userId = req.user.id; // Get the logged-in user's ID from the token

    if (!name || !email || !phone || !date || !time || !guests) {
      return res.status(400).json({ success: false, message: "Please fill all the fields" });
    }

    const newReservation = new reservationModels({
      userId, // Save the userId
      name,
      email,
      phone,
      date,
      time,
      guests,
    });

    await newReservation.save();

    res.json({ success: true, message: "Reservation created successfully", reservation: newReservation });
  } catch (error) {
    console.error("Error creating reservation:", error);
    res.status(500).json({ success: false, message: "Failed to create reservation" });
  }
};

const getAllReservations = async (req, res) => {
  try {
    const reservations = await reservationModels.find();
    res.json({ reservations });
  } catch (error) {
    console.error(error);
    res.json({ message: "Error fetching reservations" });
  }
};
const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the reservation
    const deletedReservation = await reservationModels.findByIdAndDelete(id);

    // If no reservation is found, return a 404 response
    if (!deletedReservation) {
      return res.status(404).json({
        success: false,
        message: "Reservation not found",
      });
    }

    // Return success response
    res.json({
      success: true,
      message: "Reservation deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting reservation:", error);

    // Return error response
    res.status(500).json({
      success: false,
      message: "Error deleting reservation",
      error: error.message,
    });
  }
};
const getUserReservations = async (req, res) => {
  try {
    const userId = req.user.id; // Get the logged-in user's ID from the token
    const reservations = await reservationModels.find({ userId }); // Filter by userId
    res.json({ success: true, reservations });
  } catch (error) {
    console.error("Error fetching user reservations:", error);
    res.status(500).json({ success: false, message: "Failed to fetch reservations" });
  }
};

export { createReservation, getAllReservations, deleteReservation, getUserReservations };
