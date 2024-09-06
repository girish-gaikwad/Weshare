import express from 'express';
import { login, logout, signup, verifyEmail, forgotPassword, resetPassword, checkAuth } from "../controllers/auth.controller.js"; 
import { VerifyToken } from "../middleware/verifyToken.js";
import { upload } from "../utils/upload.config.js"; // Import the multer configuration

const router = express.Router();

router.get("/check-auth", VerifyToken, checkAuth);

// Use 'upload.single("profilePic")' to handle single file upload
router.post("/signup", upload.single("profilePic"), signup); // Multer added here to handle profile picture

router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

export default router;



// {
//     "email": "vibez2055@gmail.com",
//     "password": "Password123!",
//     "name": "John Doe",
//     "userName": "john_doe_2024",
//     "dateOfBirth": "1990-05-15",
//     "gender": "Male",
//     "profilePic": "https://example.com/images/john.jpg"
//   }
  