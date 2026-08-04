import pool from "../config/db.config.js";

class UserDatabase {
  async findByEmail(email) {
    const [rows] = await pool.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    return rows.length > 0 ? rows[0] : null;
  }

  async createUser(userData) {
    const { name, email, password } = userData;
    const [result] = await pool.execute(
      "INSERT INTO users (name, email, password) VALUES(?, ?, ?)",
      [name, email, password],
    );

    const [rows] = await pool.execute("SELECT * FROM users WHERE id = ?", [
      result.insertId,
    ]);
    return { id: result.insertId, name, email };
  }
}

const userDatabase = new UserDatabase();
export default userDatabase;
