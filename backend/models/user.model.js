import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true, // Ensuring the username is unique
    },
    dateOfBirth: {
      type: Date,
      required: false,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: false,
    },
    profilePic: {
      type: String,
      required: false,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);


export const User = mongoose.model('User',userSchema)

