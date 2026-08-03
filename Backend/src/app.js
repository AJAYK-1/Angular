import express from "express";
import { config } from "dotenv";
config();
import healthRouter from "./routes/health.routes.js";

const app = express();
app.use(express.json());

app.use("/api/health", healthRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
