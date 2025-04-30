import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inActive", "blocked"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    profilePic: {
      type: String
    }
  },

  { timestamps: true }
);

const userModel = mongoose.model("LoginUser", userSchema);

export default userModel;
