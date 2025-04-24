import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";

const app = express();

const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

app.use(cors());
app.use(express.json())

app.use('/api/user', userRouter)

app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.listen(port, () => console.log("server is working" + port))




