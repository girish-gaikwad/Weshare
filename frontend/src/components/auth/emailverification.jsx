import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const EmailVerification = () => {
  const [code, setCode] = useState(Array(6).fill(""));
  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Focus the next input automatically
      if (value && index < 5) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const codex = code.join(""); // Combine the code array into a single string
    console.log("Entered code:", codex);
  
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/verify-email",
        { code: codex }, // Send `codex` wrapped in an object
        { withCredentials: true }
      );
  
      console.log(response);
      toast.success("Email verified successfully!"); // Update success message
      // setisloading(false);
      navigate("/Weshare/feed"); // Redirect to a different route after verification (adjust as needed)
    } catch (error) {
      toast.error(error.response?.data?.message || "Verification failed");
      console.error("Error verifying email:", error);
      // setisloading(false);
    }
  };
  

  const isFormComplete = () => {
    return code.every(digit => digit !== ""); // Check if all fields are filled
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Verify Your Email</h2>
        <p className="mb-6">Enter the 6-digit code sent to your email address.</p>

        <form onSubmit={handleSubmit} className="space-x-2">
          <div className="flex justify-center mb-4">
            {code.map((digit, idx) => (
              <input
                key={idx}
                id={`code-${idx}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, idx)}
                className="w-10 h-12 text-center text-2xl rounded-lg border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white mx-1"
              />
            ))}
          </div>

          <button
            type="submit"
            className={`btn btn-success w-full font-mono text-lg py-2 px-4 rounded-lg focus:outline-none ${isFormComplete() ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
            disabled={!isFormComplete()} // Disable button if form is not complete
          >
            Verify Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
