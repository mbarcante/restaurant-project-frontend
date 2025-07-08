import { AuthResponse, LoginPayload, RegisterPayload } from "@/types";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL;

  if (!API_BASE_URL) throw new Error("REACT_APP_API_BASE_URL is not defined");

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
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: AuthResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching menu item:", error);
      throw new Error("Not implemented");
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
        console.error("Error fetching menu item:", errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: AuthResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching menu item:", error);
      throw new Error("Not implemented");
    }
  },
};
