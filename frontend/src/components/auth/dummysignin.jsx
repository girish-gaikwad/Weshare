import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import "@fortawesome/fontawesome-free/css/all.min.css";
import defaultProfile from "/images/default_profile.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../zustand/AuthStore"; // Import the Zustand store
import { FaSpinner } from "react-icons/fa6";

const SignUpPage = () => {
  const [image, setImage] = useState(defaultProfile);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    password: "",
    profilePic: null,
  });

  const [validFields, setValidFields] = useState({
    name: false,
    userName: false,
    gender: false,
    dateOfBirth: false,
    email: false,
    password: false,
  });

  const navigate = useNavigate();
  const { signup, isLoading } = useAuthStore(); // Access signup function from Zustand store

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return /^[a-zA-Z\s]{2,}$/.test(value);
      case "userName":
        return /^[a-zA-Z0-9_]{3,15}$/.test(value);
      case "gender":
        return value !== "";
      case "dateOfBirth":
        return value !== "";
      case "email":
        return /^\S+@\S+\.\S+$/.test(value);
      case "password":
        // return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value); //for complex passwords
        return value.length > 6; // Updated validation to check only length

      default:
        return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setValidFields({ ...validFields, [name]: validateField(name, value) });
  };

  const loadFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setFormData({ ...formData, profilePic: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = Object.keys(validFields).every((key) => validFields[key]);
    if (isValid && isChecked) {
      signup(formData, navigate); // Use signup from the Zustand store
    } else {
      toast.error("Please fill all fields");
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
            {/* Profile Pic Upload */}
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
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border ${validFields.name ? 'border-green-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {validFields.name && (
                <CheckCircleIcon className="w-6 h-6 text-green-500 absolute top-3 right-3" />
              )}
            </div>

            {/* Username */}
            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Username"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className={`w-full p-3 border ${validFields.userName ? 'border-green-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {validFields.userName && (
                <CheckCircleIcon className="w-6 h-6 text-green-500 absolute top-3 right-3" />
              )}
            </div>

            {/* Gender */}
            <div className="mb-4 relative">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`w-full p-3 border ${validFields.gender ? 'border-green-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {validFields.gender && (
                <CheckCircleIcon className="w-6 h-6 text-green-500 absolute top-3 right-3" />
              )}
            </div>

            {/* Date of Birth */}
            <div className="mb-4 relative">
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={`w-full p-3 border ${validFields.dateOfBirth ? 'border-green-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {validFields.dateOfBirth && (
                <CheckCircleIcon className="w-6 h-6 text-green-500 absolute top-3 right-3" />
              )}
            </div>

            {/* Email */}
            <div className="mb-4 relative">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border ${validFields.email ? 'border-green-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {validFields.email && (
                <CheckCircleIcon className="w-6 h-6 text-green-500 absolute top-3 right-3" />
              )}
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-3 border ${validFields.password ? 'border-green-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {validFields.password && (
                <CheckCircleIcon className="w-6 h-6 text-green-500 absolute top-3 right-3" />
              )}
            </div>

            {/* Checkbox */}
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-gray-700">I agree to the Terms and Conditions</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
              disabled={isLoading} // Disable button during loading
            >
              {isLoading ? <FaSpinner className="animate-spin mx-auto" /> : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
