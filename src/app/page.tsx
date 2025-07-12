"use client";
import HeaderMenu from "@/components/HeaderMenu/HeaderMenu";
import Footer from "@/components/Footer/Footer";
import Login from "@/components/Login/Login";
import SignUp from "@/components/SignUp/SignUp";
import usePage from "./page.logic";

export default function Home() {
  const { handleToggleSignUp, toggleSignUp } = usePage();

  return (
    <div className="w-screen flex flex-col items-center min-h-screen bg-violet-100 ">
      <HeaderMenu />
      <div className="flex-grow flex items-center justify-center my-4">
        <h1 className="hidden lg:flex text-4xl font-bold text-violet-500">Welcome to our Restaurant</h1>
        <h1 className="flex lg:hidden text-4xl font-bold text-violet-500 text-center">
          Welcome <br /> to our Restaurant
        </h1>

      </div>
      <div className="flex-grow flex items-start justify-start">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm mb-4">
          {toggleSignUp ? (<SignUp />) :
            (<Login />)
          }
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              {toggleSignUp ? ("Already have an account?") : ("Don't have an account?")}
              <span onClick={handleToggleSignUp} className="text-violet-500 hover:underline">
                {toggleSignUp ? ("Sign In") : ("Sign Up")}
              </span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
