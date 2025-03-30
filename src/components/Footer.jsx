import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-900 py-6 w-full text-white text-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-lg font-semibold">&copy; 2025 YourBrand. All Rights Reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-gray-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 transition">Terms of Service</a>
          <a href="#" className="hover:text-gray-400 transition">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
