'use client'; // This directive is necessary for client-side interactivity in Next.js App Router

import React, { useState } from 'react';
import Link from 'next/link'; // Import Link for client-side navigation

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Menu', href: '/menu' },
    { name: 'Reservations', href: '/reservations' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Login', href: '/login' },
    // You might want a conditional link for 'Dashboard' or 'Profile' if logged in
  ];

  return (
    <header className="w-full bg-violet-300 text-violet-500 top-0 ">

      <div className="container mx-auto flex justify-between items-center p-2">
        {/* Mobile Menu Button (Hamburger) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {/* Hamburger Icon */}
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>


        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-6 ">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-lg text-violet-500 hover:text-violet-300  transition-colors pr-3 duration-200">
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Logo/Site Title */}
        <Link href="/" className="text-2xl font-bold text-violet-700 hover:text-violet-500 pr-3">
          TheRestaurant
        </Link>

      </div>

      {/* Mobile Navigation (toggled by state) */}
      <nav
        // Apply 'block' or 'hidden' based on isMobileMenuOpen state
        className={`md:hidden bg-violet-300 mt-4 p-4 rounded-md ${isMobileMenuOpen ? 'block' : 'hidden'
          }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            // Close menu when a link is clicked (optional, but good UX)
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-lg hover:bg-violet-600 rounded-md px-3"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;