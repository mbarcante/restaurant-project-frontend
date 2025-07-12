
import {authService} from "@/services/authService";
import { useState } from "react";

const useLogin = () => {
const  [error, setError] = useState<string | null>(null);

const handleLogin = async (credentials: {email: string, password: string}) => {
    try {
        const response = await authService.loginAuth(credentials);
      if (!response) {
        setError("Login failed: No response from server."); // More specific message
        return;
      }
      console.log("Login successful:", response);
      // Handle successful login, e.g., redirect or store token
      // If successful, ensure error is null
      setError(null); 
        console.log("Login successful:", response);
        // Handle successful login, e.g., redirect or store token
    } catch (error: any) {
        setError(error.message || "An error occurred during login");
        console.error("Login error:", error);
    }
}

const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string; 
    const password = formData.get("password") as string;
    handleLogin({email, password});
} 
return {onSubmit, error}
}

export default useLogin;