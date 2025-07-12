"use client";
import { useEffect, useState } from "react";
import useLogin from "./Login.logic";

const Login = () => {
    const { onSubmit, error } = useLogin();
  useEffect(() => {
        if (error) {
            console.error("Login error from useEffect:", error); // Added "from useEffect" for clarity
        }
    }, [error]); // <--- CHANGE THIS: Listen for changes in the 'error' state
    
    return (

            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div className="text-2xl font-bold mb-6 text-violet-500 flex justify-center">
                    Sign In
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="input"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="input"
                        name="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="button"
                >
                    Login
                </button>
                 {error && <span className="text-red-500 mt-4">{error}</span>}
                
            </form>
    );
}

export default Login