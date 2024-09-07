import fs from 'fs';
import path from 'path';
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import {
  sendPasswordRestEmail,
  sendsuccessResetPasswordEmail,
  sendVerificationEmail,
  sendWelcomeEmail,
} from "../mailtrap/emails.js";
import crypto from "crypto";

// export const signup = async (req, res) => {
//   console.log("signup");

//   const { email, password, name, userName, dateOfBirth, gender } = req.body;
//   const profilePic = req.file ? req.file.path : null; // Get the path of the uploaded profile picture

//   console.log(email, password, name, userName, dateOfBirth, gender, profilePic);

//   try {
//     // Validate input
//     if (!email || !password || !name || !userName || !dateOfBirth || !gender) {
//       throw new Error("All fields are required");
//     }

//     // Check if user already exists
//     const userAlreadyExists = await User.findOne({ email });
//     if (userAlreadyExists) {
//       console.log("User Aleady exists",userAlreadyExists);
//       return res
//         .status(400)
//         .json({ success: false, message: "User already exists" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Generate a verification token
//     const verificationToken = Math.floor(
//       100000 + Math.random() * 900000
//     ).toString();

//     // Create a new user with profilePic
//     const user = new User({
//       email,
//       password: hashedPassword,
//       name,
//       userName,
//       dateOfBirth,
//       gender,
//       profilePic, // Store the profile picture path in the user document
//       verificationToken,
//       verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours expiration
//     });

//     // Save the user to the database
//     await user.save();

//     // Generate token and set cookie (assuming this function is defined)
//     generateTokenAndSetCookie(res, user._id);

//         await sendVerificationEmail(user.email, verificationToken);

//     // Respond with success and exclude the password from the response
//     res.status(201).json({
//       success: true,
//       message: "User created successfully",
//       user: {
//         ...user._doc, // spread user data
//         password: undefined, // exclude password
//       },
//     });
//   } catch (error) {
//     console.error("Error in signup", error);


//     return res.status(400).json({ success: false, message: error.message });
//   }
// };
export const signup = async (req, res) => {
  console.log("signup");

  const { email, password, name, userName, dateOfBirth, gender } = req.body;
  const profilePic = req.file ? req.file.path : null; // Get the path of the uploaded profile picture

  // console.log(email, password, name, userName, dateOfBirth, gender, profilePic);

  try {
    // Validate input
    if (!email || !password || !name || !userName || !dateOfBirth || !gender) {
      throw new Error("All fields are required");
    }

    // Check if user already exists
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      // console.log("User Already exists", userAlreadyExists);

      // Delete the uploaded file if it exists
      if (profilePic) {
        fs.unlinkSync(path.resolve(profilePic));
      }

      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a verification token
    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

    // Create a new user with profilePic
    const user = new User({
      email,
      password: hashedPassword,
      name,
      userName,
      dateOfBirth,
      gender,
      profilePic, // Store the profile picture path in the user document
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours expiration
    });

    // Save the user to the database
    await user.save();

    // Generate token and set cookie (assuming this function is defined)
    generateTokenAndSetCookie(res, user._id);

    await sendVerificationEmail(user.email, verificationToken);

    // Respond with success and exclude the password from the response
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc, // spread user data
        password: undefined, // exclude password
      },
    });
  } catch (error) {
    console.error("Error in signup", error);

    // Delete the uploaded file if an error occurs
    if (profilePic) {
      fs.unlinkSync(path.resolve(profilePic));
    }

    return res.status(400).json({ success: false, message: error.message });
  }
};

export const verifyEmail = async (req, res) => {

  console.log("ping message")

  const { code } = req.body;
  console.log(code);

  try {
    // Use 'User' as your Mongoose model, not 'user'
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() }, // Ensures token is not expired
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification code",
      });
    }

    // Mark user as verified and clear token fields
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;

    // Save the updated user
    await user.save();

    // Send a welcome email after verification
    await sendWelcomeEmail(user.email, user.name);

    // Respond with the updated user details (excluding password)
    res.status(200).json({
      success: true,
      message: "Email verified successfully",
      user: {
        ...user._doc, // Correct way to spread the user document in Mongoose
        password: undefined, // Exclude the password
      },
    });
  } catch (error) {
    // Handle any errors by sending a response with status 500
    console.error("Error verifying email:", error);
    res.status(500).json({
      success: false,
      message: "Server error during email verification",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "invalid credentials" });
    }

    generateTokenAndSetCookie(res, user._id);

    user.lastLogin = new Date();
    await user.save();

    res.status(200).json({
      success: true,
      message: "loggedin successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log("Error in login", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Loggedout successfully" });
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    // Check if the user with the provided email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "There is no account connected to this email",
      });
    }

    // Generate a reset password token and its expiry time
    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // 1 hour expiry

    // Save the reset token and expiry time to the user's account
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = resetTokenExpiresAt;
    await user.save();

    // Send a password reset email with the token
    await sendPasswordRestEmail(
      user.email,
      `${process.env.CLIENT_URL}/reset-password/${resetToken}`
    );

    // Send success response
    return res.status(200).json({
      success: true,
      message: "Password reset link has been sent to your email",
    });

  } catch (error) {
    // Catch any errors and return a 500 status code with an error message
    console.error("Error in forgotPassword function:", error); // Log the error for debugging
    return res.status(500).json({
      success: false,
      message: "An error occurred while trying to send the reset password link. Please try again later.",
      error: error.message, // Optional: Include the error message for debugging
    });
  }
};


export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    console.log("token",token, password);

    // Find the user with the valid reset token and check the expiry date
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() },
    });

    console.log(token, password, User.resetPasswordToken);

    // If no valid user is found, send an error response
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired reset token" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user password and clear the reset token and expiration date
    user.password = hashedPassword; // Don't forget to update the password!
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;

    // Save the updated user information
    await user.save();

    await sendsuccessResetPasswordEmail(user.email);

    // Send success response
    return res
      .status(200)
      .json({ success: true, message: "Password has been reset successfully" });
  } catch (error) {
    console.error("Error resetting password:", error.message);
    return res
      .status(500)
      .json({
        success: false,
        message: "Server error. Please try again later.",
      });
  }
};


export const checkAuth = async (req, res) => {
  try{
    const user = await User.findById(req.userId).select("-password");
    
    if(!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }
    res.status(400).json({success:true,user})
  } catch (error) {
  
  console.log("error in checkAuth",error)
  res.status(400).json({ success: false, message: "Server error" });
  }
}