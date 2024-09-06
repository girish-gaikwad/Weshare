import express from "express";
import { connectDB } from "./DB/connectDB.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import authRouter from "./routers/auth.route.js";

const app = express();
app.use(express.json())
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173', // Adjust according to your frontend
  credentials: true, // Allows cookies to be sent
}));app.use("/api/auth", authRouter);
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  connectDB();
  console.log(`service on port ${PORT}`);
});
