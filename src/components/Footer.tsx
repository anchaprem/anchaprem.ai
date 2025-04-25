import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/anchaprem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#64ffda] transition-colors duration-300"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/anchaprem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#64ffda] transition-colors duration-300"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:anchaprem@gmail.com"
              className="text-gray-400 hover:text-[#64ffda] transition-colors duration-300"
            >
              <FiMail className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm font-mono">
            <p>Designed & Built by Ancha Premchand</p>
          </div>

          {/* Year */}
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 