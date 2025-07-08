import { FetchUser, UpdateUserPayload } from "@/types";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

if (!API_BASE_URL) throw new Error("REACT_APP_API_BASE_URL is not defined");
export const userService = {
  fetchUsers: async (token: string): Promise<FetchUser[]> => {
    try {
      const response = await fetch(`{API_BASE_URL}/api/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
     if (!response.ok) {
        const errorData = await response.json();
        console.error("Error fetching menu item:", errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      };

      const data: FetchUser[] = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw new Error("Error fetching user");
    }
  },
  updateUser: async (id: number, token: string): Promise<UpdateUserPayload> => {
    try {
      const response = await fetch(`{API_BASE_URL}/api/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error fetching menu item:", errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      };

      const data: UpdateUserPayload = await response.json();
      return data;
    } catch (error: any) {
      console.error("Error updating user:", error);
      throw new Error("Faileed to update user: " + error.message);
    }
  },
};
