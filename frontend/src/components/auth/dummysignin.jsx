import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/solid"; // You can use this if you have Heroicons
import "@fortawesome/fontawesome-free/css/all.min.css";
import defaultProfile from "/images/default_profile.png";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const SignUpPage = () => {
  const [isloading, setisloading] = useState(false);
  const [image, setImage] = useState(defaultProfile); // Default profile image
  const [isChecked, setIsChecked] = useState(false); // State for the checkbox
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle profile pic upload and display preview
  const loadFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Temporarily display the image
      setFormData({ ...formData, profilePic: file }); // Update formData with the file
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    password: "",
    profilePic: null,
  });
  // Validation functions
  const isFullNameValid = formData.name.length > 0;
  const isUserNameValid = formData.userName.length > 0;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isPasswordValid = formData.password.length > 6;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setisloading(true); // Show loading spinner
    const data = new FormData();
    data.append("name", formData.name);
    data.append("userName", formData.userName);
    data.append("gender", formData.gender);
    data.append("dateOfBirth", formData.dateOfBirth);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("profilePic", formData.profilePic);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        data,
        { withCredentials: true },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          credentials: "include", // Include credentials (cookies)
        }
      );
      toast.success("Signup successful:", response.data);
      setisloading(false);
      navigate("/verify-email");

    } catch (error) {
      toast.error(error.response.data.message);

      console.error("Error signing up:", error);
      setisloading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Side with Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <img
            src="/images/tanjiro.png"
            alt="Artwork"
            className="h-full object-cover hidden md:block"
          />
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2 w-full p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Welcome to Weshare
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Profile Picture Upload */}
            <div className="mb-6 flex justify-center">
              <label htmlFor="profilePic" className="cursor-pointer">
                <div className="relative">
                  {formData.profilePic ? (
                    <img
                      src={image}
                      alt="Profile"
                      className="w-24 h-24 rounded-full object-cover border border-gray-300"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">Upload</span>
                    </div>
                  )}
                  <input
                    type="file"
                    id="profilePic"
                    accept="image/*"
                    className="hidden"
                    onChange={loadFile}
                  />
                </div>
              </label>
            </div>

            {/* Full Name */}
            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Full name"
                name="name"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {isFullNameValid && (
                <CheckCircleIcon className="w-6 h-6 text-green-500 absolute top-3 right-3" />
              )}
            </div>

            {/* Username */}
            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Username"
                name="userName"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {isUserNameValid && (
                <CheckCircleIcon className="w-6 h-6 text-green-500 absolute top-3 right-3" />
              )}
            </div>

            {/* Email */}
            <div className="mb-4 relative">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {isEmailValid && (
                <CheckCircleIcon className="w-6 h-6 text-green-500 absolute top-3 right-3" />
              )}
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <input
                type="password"
                placeholder="Password (min. 6 characters)"
                name="password"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {isPasswordValid && (
                <CheckCircleIcon className="w-6 h-6 text-green-500 absolute top-3 right-3" />
              )}
            </div>

            {/* Gender */}
            <div className="flex">
              <div className="mb-4 relative flex w-[100%]">
                
                
                <select
                  name="gender"
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                  <option value="">Select Gender ⚥</option>
                  <option value="Male">Male ♂️</option>
                  <option value="Female">Female ♀️</option>
                  <option value="Other">Other</option>
                </select>
                
                
                {formData.gender && (
                  <CheckCircleIcon className="w-6 h-6 text-green-500 absolute top-3 right-3" />
                )}
              </div>
              
              <div className="mb-4 relative flex w-[100%]">
                <input
                  type="date"
                  placeholder="Date of Birth"
                  name="dateOfBirth"
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formData.dateOfBirth && (
                  <CheckCircleIcon className="w-6 h-6 text-green-500 absolute top-3 right-3" />
                )}
              </div>
            </div>

         

            {/* Agree to Terms */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                onChange={(e) => setIsChecked(e.target.checked)} // Update checkbox state
              />
              <span>
                I agree with the website's{" "}
                <a href="#" className="text-blue-500 underline">
                  terms and conditions
                </a>
              </span>
            </div>

            {/* Sign Up Button */}

            <button
              type="submit"
              disabled={!isChecked || isloading } 
              className={`w-full p-3 rounded-md ${
                !isChecked || isloading
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
            >
{isloading ? (
                <div className="flex justify-center items-center">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 0 1 8-8v8H4z"
                    ></path>
                  </svg>
                </div>
              ) : (
                "Sign Up"
              )}            </button>

            {/* Sign In Link */}
            <p className="text-center mt-4">
              Already a member?{" "}
              <a href="#" className="text-blue-500 underline">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
