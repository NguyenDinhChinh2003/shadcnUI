// src/components/layout/Footer.tsx

import React from "react";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-500 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Description */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">MyApp</h2>
            <p className="text-sm text-gray-400">
              Empowering your digital experience.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-4">
            <a
              href="/terms"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/contact"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} MyApp. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {/* <FaFacebook className="h-5 w-5" /> */}
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {/* <FaTwitter className="h-5 w-5" /> */}
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {/* <FaInstagram className="h-5 w-5" /> */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
