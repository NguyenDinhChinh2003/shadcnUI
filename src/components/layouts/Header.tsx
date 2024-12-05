// src/components/layout/Header.tsx

import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-slate-400 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="h-8 w-8"
          />
          <span className="text-lg font-bold text-gray-800">MyApp</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </a>
          <a
            href="/services"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:inline-flex px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition">
            Login
          </button>
          <button className="inline-flex md:hidden text-gray-600 hover:text-gray-900">
            {/* Mobile menu icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
