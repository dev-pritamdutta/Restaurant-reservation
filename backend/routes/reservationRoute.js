import express from "express";
import {
  createReservation,
  getAllReservations,
  deleteReservation,
  getUserReservations,
} from "../controllers/reservationControllers.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", protect, createReservation);
router.get("/get", protect, adminOnly, getAllReservations);
router.get("/get-user", protect, getUserReservations); // New route for user-specific reservations
router.delete("/delete/:id", protect, deleteReservation);

export default router;
