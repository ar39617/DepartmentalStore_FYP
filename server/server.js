

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/auth/auth-routes");

const app = express();
const PORT = process.env.AUTH_PORT || 4000;
const DB_URI = process.env.AUTH_DB_URI || "mongodb://localhost:27017/authDB";

// Connect to MongoDB
mongoose.connect(DB_URI)
  .then(() => console.log("Connected to MongoDB for Registration Server"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(
    cors({
      origin: ['http://localhost:5173', 'http://127.0.0.1:5173' ],
      methods: ["GET", "POST", ],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
        "cookies",
      ],
      credentials: true, // Allow cookies to be sent
    })
  );
app.use(cookieParser());
app.use(express.json());

// Root Path for Group Info
app.get("/", (req, res) => {
  res.send("Group Info: Group Number, Group Members, Project Title: Distributed E-commerce System");
});

// Authentication Routes
app.use("/api/auth", authRouter);

// Start Registration Server
app.listen(PORT, () => console.log(`Registration server running on port ${PORT}`));
