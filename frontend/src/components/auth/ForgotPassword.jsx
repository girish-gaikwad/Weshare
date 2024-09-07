import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { useAuthStore } from "../../zustand/AuthStore"; // Import zustand store
import { FaSpinner } from "react-icons/fa6";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { isLoading, forgotPassword } = useAuthStore(); // Assuming you are using the zustand store

  const handleSendResetLink = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true); // Show success message
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Forgot Password
        </h2>

        {!isSubmitted ? (
          <>
            <form onSubmit={handleSendResetLink}>
              <div className="mb-4 relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-600 hover:scale-105 active:scale-95 transition transform duration-200"
              >

              {isLoading ? <FaSpinner className="animate-spin mx-auto" /> : "Send Reset link..."}
              </button>
            </form>

            <div className="text-center mt-4">
              <Link
                to="/login"
                className="text-sm text-blue-500 hover:underline flex justify-center items-center"
              >
                <FaArrowLeft className="mr-2" /> Go to Login Page
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="flex items-center justify-center">
              <FaEnvelope className=" size-11 animate-bounce text-green-400 " />
            </div>


            <p className="text-gray-700 mb-6 mt-5">
              If an account exists for <strong>{email}</strong>, you will
              receive a password reset link shortly.
            </p>
            <Link
              to="/login"
              className="text-sm text-blue-500 hover:underline flex justify-center items-center"
            >
              <FaArrowLeft className="mr-2" /> Go to Login Page
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
