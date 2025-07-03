import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollShadow, setScrollShadow] = useState(false);

  const sections = ['home', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrollShadow(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <>
      {sections.map((section) => (
        <Link
          key={section}
          to={section}
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          className={`relative px-4 py-2 cursor-pointer transition-colors ${
            activeSection === section
              ? 'text-purple-400'
              : 'text-gray-300 hover:text-purple-300'
          }`}
          onSetActive={() => setActiveSection(section)}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
          {activeSection === section && (
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400"
              layoutId="nav-underline"
            />
          )}
        </Link>
      ))}
    </>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-shadow duration-300 ${
        scrollShadow ? 'shadow-xl' : 'shadow-md'
      } bg-gray-900/95 backdrop-blur-sm border-b border-gray-800`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 group"
          >
            <FiCode className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
            <span className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Priyanshu Kumar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-4">{navLinks}</div>
            <div className="h-6 w-px bg-gray-700 mx-4" />
            <div className="flex space-x-4">
              <a
                href="https://github.com/hack-09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-purple-300 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/priyanshukumar9/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-purple-300 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-purple-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-gray-800"
          >
            <div className="flex flex-col items-center space-y-4">{navLinks}</div>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://github.com/hack-09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-purple-300 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-purple-300 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;