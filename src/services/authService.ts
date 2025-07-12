import { AuthResponse, LoginPayload, RegisterPayload } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


if (!API_BASE_URL) throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
 
export const authService = {
  loginAuth: async (credentials: LoginPayload): Promise<AuthResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error fetching menu item:", errorData);
        throw new Error(errorData.error || `HTTP error! Status: ${response.status}`);
      }
      const data: AuthResponse = await response.json();
      console.log
      return data;
    } catch (error: any) {
    console.error("Login authentication service caught an error:", error);
      
      throw new Error(error.message || "An unexpected error occurred during login."); 
    }
  },

  registerAuth: async (user: RegisterPayload): Promise<AuthResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error registering item:", errorData);
        throw new Error(errorData.error || `HTTP error! Status: ${response.status}`);
      }
      const data: AuthResponse = await response.json();
      return data;
    } catch (error: any) {
      console.error("Error fetching menu item:", error);
      throw new Error(error.message || "An unexpected error occurred during registration.");
    }
  },
};
