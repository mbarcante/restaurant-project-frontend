import React from 'react';
import { CiInstagram } from "react-icons/ci";


const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-auto bg-violet-500 py-2 text-violet-950">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <p className="text-sm ">
          &copy; {new Date().getFullYear()}  TheRestaurant. All rights reserved.
        </p>
      </div>
      <p className="text-sm flex items-center justify-center">
        Follow us on Instagram: <a><CiInstagram size={24}  /></a>
      </p>
    </footer>
  );
};

export default Footer;
