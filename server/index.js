import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as socket from "socket.io";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/api/auth", userRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB CONNECTED SUCCESSFULLY");
  })
  .catch((err) => console.log(err.message));

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
