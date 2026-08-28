import authService from "../services/auth.service.js";

class AuthController {
  signUp = async (req, res) => {
    const data = req.body;
    const result = await authService.userRegistration(data);

    if (!result.success) return res.status(400).json(result);
    return res.status(201).json(result);
  };

  signIn = async (req, res) => {
    const data = req.body;
    const result = await authService.userLogin(data);

    if (!result.success) return res.status(401).json(result);
    return res.status(200).json(result);
  };

  getProfile = (req, res) => {
    return res.status(200).json({ data: req.user });
  };
}

const authController = new AuthController();
export default authController;
