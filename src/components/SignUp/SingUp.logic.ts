import { authService } from "@/services";
import { RegisterPayload} from "@/types"
import { useState } from "react";

const useSignUp = () => {
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (credentials:  RegisterPayload ) => {
    try {
      const response = await authService.registerAuth(credentials);
      if (!response) {
        setError("Sign Up failed: No response from server.");
        return;
      }
      console.log("Sign Up successful:", response);
      // Handle successful sign up, e.g., redirect or store token
      setError(null);
    } catch (error: any) {
      setError(error.message || "An error occurred during sign up");
      console.error("Sign Up error:", error);
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const username = formData.get("username") as string; // Assuming you have a username field
    const firstName = formData.get("first_name") as string;
    const lastName = formData.get("last_name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    handleSignUp({ username, firstName, lastName, email,  password });
  };

  return { onSubmit, error };
}

export default useSignUp