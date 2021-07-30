const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

const User = require("./models/registrationModel");

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.get("/register", (req, res) => {
  res.send("Register!");
});
app.post("/register", async (req, res) => {
  const { name, email, phone, designation, location, course, remarks } =
    req.body;

  // Create user
  const user = await User.create({
    name,
    email,
    phone,
    designation,
    location,
    course,
    remarks,
  });

  user.save({ validateBeforeSave: false });

  return res.status(200).json({
    success: true,
    data: user,
  });
});

app.listen(PORT, console.log(`Server running i on port ${PORT}`));
