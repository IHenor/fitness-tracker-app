const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Use CORS middleware to allow requests from your frontend
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
    credentials: true, // Allow credentials like cookies to be sent with the request
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
