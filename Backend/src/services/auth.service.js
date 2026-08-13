import userDatabase from "../database/user.database.js";

class AuthService {
  async registerUser(userDetails) {
    try {
      const { name, email, password } = userDetails;
      if (!name || !email || !password) {
        return { success: false, message: "All credentials required..." };
      }

      const user = await userDatabase.findByEmail(email);
      if (user) {
        return { success: false, message: "User already exists..." };
      }

      const result = await userDatabase.createUser(userDetails);
      return result;
    } catch (error) {
      console.error("Error in AuthService.registerUser(): ", error.message);
      return { success: false, message: "Internal Server Error..." };
    }
  }
}

const authService = new AuthService();
export default authService;
