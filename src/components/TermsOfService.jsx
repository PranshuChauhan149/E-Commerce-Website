import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-6 text-gray-600">Last updated: March 2025</p>

      <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
      <p className="mb-4 text-gray-700">
        Welcome to our eCommerce website. By using our site, you agree to these terms.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Use of Our Service</h2>
      <p className="mb-4 text-gray-700">
        You must be at least 18 years old or have parental permission to use our website.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. Purchases</h2>
      <p className="mb-4 text-gray-700">
        All purchases made on our platform are final. We reserve the right to cancel orders due to pricing errors or fraudulent activity.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. User Responsibilities</h2>
      <p className="mb-4 text-gray-700">
        You agree not to misuse our platform, engage in illegal activities, or violate intellectual property rights.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Termination</h2>
      <p className="mb-4 text-gray-700">
        We may suspend or terminate your account if you violate these terms.
      </p>

      <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
      <p className="mb-4 text-gray-700">
        We reserve the right to update these terms at any time. Please check back periodically.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions, contact us at 
        <a href="mailto:support@example.com" className="text-blue-500 underline"> support@example.com</a>.
      </p>
    </div>
  );
};

export default TermsOfService;