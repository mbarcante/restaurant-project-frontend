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
    <header className="w-full bg-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Site Title */}
        <Link href="/" className="text-2xl font-bold text-orange-400 hover:text-orange-500">
          KCozinha
        </Link>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-lg hover:text-yellow-400 transition-colors duration-200">
              {link.name}
            </Link>
          ))}
        </nav>

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
      </div>

      {/* Mobile Navigation (toggled by state) */}
      <nav
        // Apply 'block' or 'hidden' based on isMobileMenuOpen state
        className={`md:hidden bg-gray-700 mt-4 p-4 rounded-md ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            // Close menu when a link is clicked (optional, but good UX)
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-lg hover:bg-gray-600 rounded-md px-3"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;