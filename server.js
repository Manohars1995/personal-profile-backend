const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const path = require("path");

const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

/* ----------------------------- SECURITY ----------------------------- */

// Secure HTTP headers
app.use(helmet());

// Rate limiter (protect API from spam)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);

/* ----------------------------- MIDDLEWARE ----------------------------- */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// HTTP request logger
app.use(morgan("dev"));

/* ----------------------------- STATIC FILES ----------------------------- */

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ----------------------------- ROUTES ----------------------------- */

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "DevOps Portfolio Backend API Running 🚀"
  });
});

// API Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/profile", require("./routes/profileRoutes"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/certificates", require("./routes/certificateRoutes"));
app.use("/api/experience", require("./routes/experienceRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

/* ----------------------------- 404 HANDLER ----------------------------- */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found"
  });
});

/* ----------------------------- ERROR HANDLER ----------------------------- */

app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });
});

/* ----------------------------- SERVER ----------------------------- */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log("=================================");
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 http://localhost:${PORT}`);
  console.log("=================================");

});