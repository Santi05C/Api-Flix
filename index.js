import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import videoRoutes from "./routes/videos.js";
import categoryRoutes from "./routes/videos.js";

dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

const app = express();
app.use(express.json());

app.use(cors());

app.use("/api/video", videoRoutes);
app.use("/api/category", categoryRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  connect();
  console.log("backend corriendo");
});
