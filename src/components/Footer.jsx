import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Priyanshu Kumar. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          {/* Social media links */}
          <a href="https://www.linkedin.com/in/priyanshukumar9/" className="text-gray-400 hover:text-white">LinkedIn</a>
          <a href="https://github.com/hack-09" className="text-gray-400 hover:text-white">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;