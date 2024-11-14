const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

// Register a new user
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  // Check if the user already exists
  if (!email || !password || !userName) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  try {
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with the same email! Please try again.",
      });
    }

    // Hash the password and create a new user
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });

    await newUser.save();

    // Generate a JWT token for the newly registered user
    const token = jwt.sign(
      {
        id: newUser._id,
        role: newUser.role,
        email: newUser.email,
        userName: newUser.userName,
      },
      process.env.JWT_SECRET || "default_secret_key", // Use env variable for security
      { expiresIn: "7d" }
    );

    // Set the token in an HTTP-only cookie
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true, // Enable secure cookies in production
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      })
      .status(201)
      .json({
        success: true,
        message: "Registration successful",
        user: {
          email: newUser.email,
          role: newUser.role,
          id: newUser._id,
          userName: newUser.userName,
        },
      });
  } catch (e) {
    // console.error("Registration error:", e);
    res.status(500).json({
      success: false,
      message: "An error occurred during registration.",
    });
  }
};

// Log in an existing user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required.",
    });
  }

  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.status(404).json({
        success: false,
        message: "User does not exist! Please register first.",
      });
    }

    // Check if the password is correct
    const checkPasswordMatch = await bcrypt.compare(password, checkUser.password);
    if (!checkPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password! Please try again.",
      });
    }

    // Generate a JWT token
    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
        userName: checkUser.userName,
      },
      process.env.JWT_SECRET || "default_secret_key", // Use env variable for security
      { expiresIn: "7d" }
    );

    // Set the token in an HTTP-only cookie
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true, // Enable secure cookies in production
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      })
      .status(200)
      .json({
        success: true,
        message: "Logged in successfully",
        user: {
          email: checkUser.email,
          role: checkUser.role,
          id: checkUser._id,
          userName: checkUser.userName,
        },
      });
  } catch (e) {
    // console.error("Login error:", e);
    res.status(500).json({
      success: false,
      message: "An error occurred during login.",
    });
  }
};

// Log out the user by clearing the token cookie
const logoutUser = (req, res) => {
  res
    .clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    })
    .status(200)
    .json({
      success: true,
      message: "Logged out successfully!",
    });
};

// Authentication middleware
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    // console.log("No token found in cookies");
    return res.status(401).json({
      success: false,
      message: "Unauthorized user!",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret_key");
    req.user = decoded; // Attach user information to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    // console.error("Authorization error:", error);
    res.status(401).json({
      success: false,
      message: "Unauthorized user!",
    });
  }
};

module.exports = { registerUser, loginUser, logoutUser, authMiddleware };
