// backend/index.js
const express = require("express");
const authRoutes = require("./routes/authRoute");

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
