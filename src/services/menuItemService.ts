import {MenuItem} from '@/types';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) throw new Error("API_BASE_URL is not defined");

export const menuItemService = {
    fetchMenuItems: async (): Promise<MenuItem[]> => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/menu-items`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error fetching menu items:", errorData);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: MenuItem[] = await response.json();
            return data;
        } catch(error: any){
            console.error("Error fetching menu items:", error);
            throw new Error("Failed to fetch menu items: " + error.message);
        }
    },
    updateMenuItem: async (id: number,token: string, payload: Partial<MenuItem>): Promise<MenuItem> => {
        try{
        const response = await fetch(`${API_BASE_URL}/api/menu-items/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error updating menu item:", errorData);
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: MenuItem = await response.json();
        return data;

        }catch(error: any){
            console.error("Error updating menu item:", error);
            throw new Error("Failed to update menu item: " + error.message);
        }
    }
}
