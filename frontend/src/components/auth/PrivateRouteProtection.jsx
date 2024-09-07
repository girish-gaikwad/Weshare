import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../zustand/AuthStore";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isCheckingAuth, checkAuth, error } = useAuthStore(
    (state) => ({
      isAuthenticated: state.isAuthenticated,
      isCheckingAuth: state.isCheckingAuth,
      checkAuth: state.checkAuth,
      error: state.error,
    })
  );

  useEffect(() => {
    checkAuth(); // Call the checkAuth function on component mount
  }, [checkAuth]);

  if (isCheckingAuth) {
    return <div>Loading...</div>; // Display loading state while checking authentication
  }

  if (error) {
    console.error("Authentication error:", error); // Handle error if needed
  }

  return isAuthenticated ? children : <Navigate to="/login" />; // Redirect to login if not authenticated
};

export default PrivateRoute;
