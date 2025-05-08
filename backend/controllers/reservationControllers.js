import reservationModels from "../models/reservationModels.js";
const createReservation = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, phone, date, time, guests } = req.body;
    if (!name || !email || !phone || !date || !time || !guests) {
      return res.json({
        success: false,
        message: "Please fill all the fields",
      });
    }
    const newReservation = new reservationModels({
      name,
      email,
      phone,
      date,
      time,
      guests,
    });
    await newReservation.save();

    res.json({
      success: true,
      message: "Reservation created successfully",
      reservation: newReservation,
    });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
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
// const deleteReservation = async (req, res) => {
//   try {
//     const { id } = req.params;
//     // Find and delete the reservation
//     const deletedReservation = await reservationModels.findByIdAndDelete(id);

//     if (!deletedReservation) {
//       res.json({
//         success: true,
//         message: "Reservation deleted successfully",
//       });
//     }

//     res.json({ message: "Reservation deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     res.json({ message: "Error deleting reservation" });
//   }
// };

export { createReservation, getAllReservations, deleteReservation };
