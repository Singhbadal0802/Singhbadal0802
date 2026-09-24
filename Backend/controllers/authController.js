import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ExpenseTracker from "../models/userData.js";

export const register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone = "",
      monthlyBudget = 45000,
    } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (!name || !email) {
      return res
        .status(400)
        .json({
          error: {
            code: name ? 101 : 102,
            message: `Missing required parameter ${name ? "name" : "email"}`,
          },
        });
    }

    if (!password) {
      return res
        .status(400)
        .json({
          error: {
            code: 103,
            message: `Missing the required parameter (a password))`,
          },
        });
    }

    const user = await User.create({ name, email, password: hashedPassword });
    const userData = await ExpenseTracker.create({
      user : {
      currencyPreference: "INR",
      name,
      email,
      phone,
      joinedDate: new Date(),
      monthlyBudget,
      }
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30m",
    });

    res
      .status(201)
      .json({
        status: {
          code: "success",
          message: "new user is created with new data",
        },
        data: {
          token,
          user: { id: user._id, name: user.name, email: user.email },
        },
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30m",
    });

    res
      .status(200)
      .json({
        token,
        user: { id: user._id, name: user.name, email: user.email },
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
