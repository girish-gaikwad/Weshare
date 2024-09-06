import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaRegEyeSlash } from "react-icons/fa6";
import { FaSpinner } from "react-icons/fa"; // Import spinner icon

const LoginScreen = () => {
  const [isloading, setisloading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // New state for password visibility
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setisloading(true); // Show loading spinner

    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        formData,
        { withCredentials: true },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          credentials: "include", // Include credentials (cookies)
        }
      );
      toast.success("Login successful:", response.data);
      setisloading(false);
      navigate("/Weshare");
    } catch (error) {
      toast.error(error.response.data.message);
      console.error("Error logging in:", error.message);
      setisloading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isFormValid = formData.email && formData.password; // Check if both fields are filled

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Left side (Image + User Info) */}
        <div
          className="w-full md:w-1/2 relative bg-cover bg-center h-64 md:h-auto rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          style={{ backgroundImage: `url('path/to/your/image.jpg')` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-95">
            <img
              src="/images/1.png"
              alt="User Avatar"
              className="h-full object-cover hidden md:block"
            />
          </div>
          <div className="absolute bottom-4 left-4 text-white z-10 flex items-center space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User Avatar"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <div>
              <h3 className="font-semibold">Andrew.ui</h3>
              <p className="text-sm">UI & Illustration</p>
            </div>
          </div>
        </div>

        {/* Right side (Login form) */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-2">Hi Gamer 🎮</h1>
          <p className="text-gray-600 mb-6">Welcome to Weshare</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"} // Conditionally change input type
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="flex justify-between items-center mb-6">
              <a href="/" className="text-sm text-red-500 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={!isFormValid || isloading} // Disable if form is invalid or loading
              className={`w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600 ${
                (!isFormValid || isloading) && "opacity-50 cursor-not-allowed"
              }`}
            >
              {isloading ? (
                <FaSpinner className="animate-spin mx-auto" /> // Show spinner during loading
              ) : (
                "Login"
              )}
            </button>

            <div className="my-6 text-center text-gray-400">or</div>

            <button
              type="button"
              className="w-full border border-gray-300 text-gray-500 p-3 rounded-md flex justify-center items-center hover:bg-gray-100"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                alt="Google"
                className="w-5 h-5 mr-3"
              />
              Login with Google
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a href="/" className="text-blue-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <a href="/" className="text-gray-400 hover:text-gray-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="text-gray-400 hover:text-gray-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="text-gray-400 hover:text-gray-600">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="/" className="text-gray-400 hover:text-gray-600">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
