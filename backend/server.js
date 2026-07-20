const authRoutes = require("./routes/authRoutes");
const dns = require("dns");
const pgRoutes = require("./routes/pgRoutes");
const requestPGRoutes = require("./routes/requestPGRoutes");
// Use Google DNS instead of the broken localhost DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/pg", pgRoutes);
app.use("/api/request-pg", requestPGRoutes);
// Test Route
app.get("/", (req, res) => {
  res.send("🚀 StayFinder Backend Running");
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});