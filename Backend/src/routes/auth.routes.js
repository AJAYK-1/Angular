import express from "express";
import authController from "../controllers/auth.controller.js";
import Authenticate from "../middlewares/auth.middleware.js";
import { asyncHandler } from "../middlewares/error.middleware.js";

const authRouter = express.Router();

authRouter.post("/signUp", asyncHandler(authController.signUp));
authRouter.post("/signIn", asyncHandler(authController.signIn));
authRouter.get(
  "/get-profile",
  asyncHandler(Authenticate, authController.getProfile),
);

export default authRouter;
