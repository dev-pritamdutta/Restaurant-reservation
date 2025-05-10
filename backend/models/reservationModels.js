import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Add userId field
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  guests: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: String, required: true },
});

export default mongoose.model("Reservation", reservationSchema);