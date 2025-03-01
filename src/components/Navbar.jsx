import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 fixed w-full z-10 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-3xl font-bold text-white hover:text-purple-400 transition-colors"
          >
            🕊️ Priyanshu Portfolio
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-lg text-white hover:text-purple-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="skill"
              smooth={true}
              duration={500}
              className="text-lg text-white hover:text-purple-400 transition-colors"
            >
              Skills
            </Link>
            <Link
              to="project"
              smooth={true}
              duration={500}
              className="text-lg text-white hover:text-purple-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-lg text-white hover:text-purple-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;