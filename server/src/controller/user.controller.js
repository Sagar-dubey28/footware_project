import mongoose from "mongoose";
import User from "../model/user.model.js";
import bcrypt from "bcrypt";

export const signupUser = async (req, res) => {
  const { name, email, password, dob, gender, phone } = req.body;

  // Basic field validation
  if (!name || !email || !password || !dob || !gender || !phone) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  //password hashing
  const hashedPassword = await bcrypt.hash(password, 10);

  //profile pic
  const profilePic = `https://placehold.co/600x400?text=${name.charAt[0]}`;

  //usercreate
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    dob,
    gender,
    phone,
    role: "user",
    status: "active",
    profilePic,
  });

  //response
  res.status(200).json({
    seuccess: true,
    user: user,
    message: "signup Successfully",
  });
};

export const loginUser = async (req, res) => {};

export const updateUser = async (req, res) => {};

export const logoutUser = async (req, res) => {};

export const deleteUser = async (req, res) => {};
