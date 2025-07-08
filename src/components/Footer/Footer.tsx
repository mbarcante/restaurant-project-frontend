import React from 'react';
import { CiInstagram } from "react-icons/ci";


const Footer: React.FC = () => {
  return (
    <footer className="w-full position-absolute bottom-0 bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} KCozinha. All rights reserved.
        </p>
         <p className="text-sm">
          
        </p>
        <p className="text-xs mt-2">
          Made with ❤️ by Your Name
        </p>
      </div>
    </footer>
  );
};

export default Footer;
