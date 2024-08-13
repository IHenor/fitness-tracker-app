// backend/controllers/authController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connection = require("../db");

// Register a new user
const registerUser = (req, res) => {
  const { username, password, email, firstName, lastName, dateOfBirth } =
    req.body;

  try {
    connection.query(
      "SELECT * FROM users WHERE username = ?",
      [username],
      async (err, results) => {
        if (err) return res.status(500).json({ message: "Database error" });

        if (results.length > 0) {
          return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const now = new Date();
        const createdAt = now.toISOString().slice(0, 19).replace("T", " ");
        const updatedAt = createdAt;
        const isActive = 1; // Default to active user
        const role = "User"; // Default role as 'User'

        connection.query(
          `INSERT INTO users (Username, PasswordHash, Email, FirstName, LastName, DateOfBirth, CreatedAt, UpdatedAt, IsActive, Role) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            username,
            hashedPassword,
            email,
            firstName,
            lastName,
            dateOfBirth,
            createdAt,
            updatedAt,
            isActive,
            role,
          ],
          (err) => {
            if (err) {
              return res
                .status(500)
                .json({ message: "Error registering user" });
            }
            res.status(201).json({ message: "User registered successfully" });
          }
        );
      }
    );
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Login user
const loginUser = (req, res) => {
  const { username, password } = req.body;

  try {
    connection.query(
      "SELECT * FROM users WHERE Username = ?",
      [username],
      async (err, results) => {
        if (err) return res.status(500).json({ message: "Database error" });

        if (results.length === 0) {
          return res.status(400).json({ message: "Invalid credentials" });
        }

        const user = results[0];

        const isMatch = await bcrypt.compare(password, user.PasswordHash);
        if (!isMatch) {
          return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
          { id: user.Id, role: user.Role },
          "your_jwt_secret",
          {
            expiresIn: "1h",
          }
        );

        res.status(200).json({ token });
      }
    );
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
