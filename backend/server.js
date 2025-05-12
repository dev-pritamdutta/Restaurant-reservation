import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import reservationRoute from "./routes/reservationRoute.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRoutes);
app.use("/api/product", productRouter);
app.use("/api/reservations", reservationRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log("server is working" + port));
export default app;
