import { create } from "zustand";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,


  // Login logic
  login: async (email, password, navigate) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
      navigate("/Weshare"); // Navigate to dashboard after login
      toast.success("Login successful!");
    } catch (error) {
      set({
        error: error.response?.data?.message || "Login failed",
        isLoading: false,
      });
      toast.error(error.response?.data?.message || "Login failed");
    }
  },

  // Signup logic
  signup: async (formData, navigate) => {
    set({ isLoading: true, error: null });

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
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      toast.success("Signup successful! Please verify your email.");
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
      // Navigate to email verification page
      navigate("/verify-email");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
      set({
        error: error.response?.data?.message || "Signup failed",
        isLoading: false,
      });
    }
  },

  // Logout logic
  logout: async () => {
    set({ isLoading: true });
    try {
      await axios.post(
        "http://localhost:8080/api/auth/logout",
        {},
        { withCredentials: true }
      );
      set({ user: null, isAuthenticated: false, isLoading: false });
      toast.success("Logout successful!");
    } catch (error) {
      set({ error: "Error logging out", isLoading: false });
      toast.error("Error logging out");
    }
  },

  forgotPassword: async (email) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/forgot-password",
        {email }
      );

      toast.success(response.data.message);
      set({ isLoading: false });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Error while sending forgot password link  "
      );

      set({
        isLoading: false,
      });
      throw error;
    }
  },

  verifyEmail: async (codex,navigate) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/verify-email",
        { code: codex }, // Send `codex` wrapped in an object
        { withCredentials: true }
      );

      console.log(response);
      toast.success("Email verified successfully!"); // Update success message
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
      navigate("/Weshare/feed"); // Redirect to a different route after verification (adjust as needed)
    } catch (error) {
      toast.error(error.response?.data?.message || "Verification failed");
      set({ isLoading: false });

      console.error("Error verifying email:", error);
      // setisloading(false);
    }
  },


  resetPassword: async (token, password,navigate) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`http://localhost:8080/api/auth/reset-password/${token}`, { password});

      console.log(response); // Log the response for debugging purposes
      toast.success("Password reset successful!"); // Update success message
			set({ message: response.data.message, isLoading: false });
      navigate("/login"); // Redirect to login page after password reset
		} catch (error) {
      toast.error(error.response?.data?.message || "Error resetting password"); // Update error message
			set({
				isLoading: false,
				// error: error.response.data.message || "Error resetting password",
			});
			throw error;
		}
	},
  
  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const response = await axios.get(`http://localhost:8080/api/auth/check-auth`);
      set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
    } catch (error) {
      set({ error: error.message, isCheckingAuth: false, isAuthenticated: false });
    }
  }
  

}));
