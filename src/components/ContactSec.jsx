import React from 'react';

const ContactSec = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <p className="text-xl mb-8">Feel free to reach out for collaborations or just a friendly hello!</p>
        <a
          href="mailto:your-email@example.com"
          className="bg-transparent border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
        >
          Email Me
        </a>
      </div>
    </div>
  );
};

export default ContactSec;