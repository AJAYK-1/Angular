import jwt from "jsonwebtoken";
import userDatabase from "../database/user.database.js";

class AuthService {
  async userRegistration(userDetails) {
    const { name, email, password } = userDetails;
    if (!name || !email || !password) {
      return { success: false, message: "All credentials required..." };
    }

    const user = await userDatabase.findByEmail(email);
    if (user) {
      return { success: false, message: "User already exists..." };
    }

    const result = await userDatabase.createUser(userDetails);
    return {
      success: true,
      message: "Login Successful...",
      data: { result },
    };
  }

  async userLogin(userDetails) {
    const { email, password } = userDetails;
    const result = await userDatabase.findByEmail(email);

    if (!result || result.password !== password)
      return { success: false, message: "Incorrect Email or Password..." };

    const token = jwt.sign(
      { id: result.id, role: "user", email: result.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRY },
    );
    return { success: true, message: "Login Successful...", data: { token } };
  }
}

const authService = new AuthService();
export default authService;
