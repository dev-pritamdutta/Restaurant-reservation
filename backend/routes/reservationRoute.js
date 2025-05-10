import express from "express";
import { createReservation, getAllReservations, deleteReservation, getUserReservations } from "../controllers/reservationControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/create', protect, createReservation);
router.get('/get', protect, getAllReservations);
router.get('/get-user', protect, getUserReservations); // New route for user-specific reservations
router.delete('/delete/:id', protect, deleteReservation);

export default router;