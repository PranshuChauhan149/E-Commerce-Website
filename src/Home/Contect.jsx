import React from 'react';

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <form action="https://formspree.io/f/xdkelwbq" method='POST' className="flex flex-col gap-6">
          <input type="text"  placeholder="Username" className="p-3 border border-gray-300 rounded-md text-lg" required />
          <input type="email"  name="email" placeholder="Email" className="p-3 border border-gray-300 rounded-md text-lg" required />
          <textarea placeholder="Message" name="message" rows="5" className="p-3 border border-gray-300 rounded-md text-lg" required></textarea>
          <button type="submit" className="bg-gray-800 text-white p-3 rounded-md text-lg hover:bg-gray-700 transition cursor-pointer">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;