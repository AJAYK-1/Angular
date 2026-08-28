import "dotenv/config";
import express from "express";
import healthRouter from "./routes/health.routes.js";
import authRouter from "./routes/auth.routes.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();
app.use(express.json());

app.use("/api/health", healthRouter);
app.use("/api/auth", authRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
