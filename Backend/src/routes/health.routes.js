import express from "express";
import healthController from "../controllers/health.controller.js";

const healthRouter = express.Router();

healthRouter.get("/check-health", healthController.healthCheck);

export default healthRouter;
