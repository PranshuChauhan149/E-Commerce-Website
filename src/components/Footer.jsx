import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-900 py-6 w-full text-white text-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-lg font-semibold">&copy; 2025 YourBrand. All Rights Reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <Link to="/privacypolicy" className="hover:text-gray-400 transition">Privacy Policy</Link>
          <Link to="/termsofservice" className="hover:text-gray-400 transition">Terms of Service</Link>
          <Link to="/contect" className="hover:text-gray-400 transition">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
