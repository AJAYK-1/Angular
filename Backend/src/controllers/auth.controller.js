import authService from "../services/auth.service.js";

class AuthController {
  signUp = async (req, res) => {
    try {
      const data = req.body;
      const result = await authService.userRegistration(data);

      if (!result.success) return res.status(400).json(result);
      return res.status(201).json(result);
    } catch (error) {
      console.error("Error in AuthController.signUp(): ", error);
      return res.status(500).json({ message: "Internal Server Error..." });
    }
  };

  signIn = async (req, res) => {
    try {
      const data = req.body;
      const result = await authService.userLogin(data);

      if (!result.success) return res.status(401).json(result);
      return res.status(200).json(result);
    } catch (error) {
      console.error("Error in AuthController.signIn(): ", error);
      return res.status(500).json({ message: "Internal Server Error..." });
    }
  };

  getProfile = (req, res) => {
    try {
      return res.status(200).json({ data: req.user });
    } catch (error) {
      console.error("Error in AuthController.getProfile(): ", error);
      return res.status(500).json({ message: "Internal Server Error..." });
    }
  };
}

const authController = new AuthController();
export default authController;
