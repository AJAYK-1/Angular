import express from "express";
import authController from "../controllers/auth.controller.js";
import Authenticate from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/signUp", authController.signUp);
authRouter.post("/signIn", authController.signIn);
authRouter.get("/get-profile", Authenticate, authController.getProfile);

export default authRouter;
