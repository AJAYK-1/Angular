import authService from "../services/auth.service.js";

class AuthController {
  signUp = async (req, res) => {
    try {
      const data = req.body;
      const result = await authService.registerUser(data);

      res.status(201).json(result);
    } catch (error) {
      console.error(
        "Error in AuthController.userRegistration(): ",
        error.message,
      );
      return res.status(500).json({ message: "Internal Server Error..." });
    }
  };
}

const authController = new AuthController();
export default authController;
