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
      enum: ["active", "inactive", "blocked"],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("LoginUser", userSchema);

export default userModel;
