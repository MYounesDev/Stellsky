// client/src/services/api.js
import axios from "axios";

if (!process.env.NEXT_PUBLIC_API_URL) {
  console.warn(
    "Environment variable NEXT_PUBLIC_API_URL is not set, using default localhost."
  );
}
const API_URL = process.env.NEXT_PUBLIC_API_URL || `http://localhost:5003`;

//.replace("localhost", "192.168.1.108")  // uncomment this line to use a specific IP address

// Create an axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add the auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle session expiration
    if (error.response && error.response.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        console.log(
          "error.response.data.message : ",
          error.response.data.message
        );
        window.location.href = `/login${
          error.response.data.message === "TokenExpiredError"
            ? "?expired=true"
            : ""
        }`;
      }
    }

    // Format error message
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "An unknown error occurred";

    // Return a rejected promise with the error message
    return Promise.reject(errorMessage);
  }
);

// Auth Services
export const authService = {
  // Log in the user and store the token
  login: async (data) => {
    try {
      const response = await api.post("/login", data);
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Register a new user
  register: async (userData) => {
    try {
      const response = await api.post("/register", userData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Log out the user by removing the token
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
  },

  // Get the currently logged-in user
  getCurrentUser: () => {
    if (typeof window === "undefined") return null;
    const user = localStorage.getItem("user");
    if (!user) return null;
    try {
      return JSON.parse(user);
    } catch (error) {
      console.error("Failed to parse user data:", error);
      // If there's invalid data in localStorage, clean it up
      localStorage.removeItem("user");
      return null;
    }
  },

  // Get the current auth token
  getToken: () => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("token");
  },

  // Check if the user is authenticated
  isAuthenticated: async () => {
    try {
      const response = await api.get("/isAuthenticated");

      console.log(response);

      return !!response.token;
    } catch (error) {
      throw error;
    }
    /*
      if (typeof window === 'undefined') return false;
      return !!localStorage.getItem('token');
    */
  },

  // Get the user profile
  getProfile: async () => {
    try {
      const response = await api.get("/user/profile");
      return response;
    } catch (error) {
      throw error;
    }
  },
};
