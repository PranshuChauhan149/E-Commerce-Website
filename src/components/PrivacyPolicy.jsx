import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-6 text-gray-600">Last updated: March 2025</p>

      <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
      <p className="mb-4 text-gray-700">
        Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
      <p className="mb-4 text-gray-700">
        We collect information such as your name, email, shipping address, and payment details when you make a purchase.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
      <p className="mb-4 text-gray-700">
        We use your information to process orders, improve our services, and send you updates about your orders or promotions.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Data Protection</h2>
      <p className="mb-4 text-gray-700">
        We implement security measures to protect your data, but we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
      <p className="mb-4 text-gray-700">
        Our website may use cookies to enhance user experience and track usage statistics.
      </p>

      <h2 className="text-xl font-semibold mb-2">6. Changes to Policy</h2>
      <p className="mb-4 text-gray-700">
        We may update this policy at any time. Please check back for changes.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions, contact us at 
        <a href="mailto:support@example.com" className="text-blue-500 underline"> support@example.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
