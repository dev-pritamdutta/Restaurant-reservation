import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();

const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.listen(port, () => console.log("server is working" + port))




