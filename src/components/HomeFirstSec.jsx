import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';

const HomeFirstSec = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-32 h-32 bg-purple-500 rounded-full -top-16 -left-16 mix-blend-screen opacity-30 animate-blob"></div>
        <div className="absolute w-48 h-48 bg-blue-400 rounded-full -bottom-14 -right-14 mix-blend-screen opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute w-48 h-48 bg-blue-400 rounded-full bottom-14 -left-34 mix-blend-screen opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute w-48 h-48 bg-blue-400 rounded-full bottom-84 -left-34 mix-blend-screen opacity-30 animate-blob animation-delay-3000"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left md:w-1/2 z-10 m-20"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg mb-2 text-purple-400 font-mono"
        >
          Hi, my name is
        </motion.p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Priyanshu.
        </h1>
        <p className="text-2xl md:text-3xl mb-6 font-medium text-gray-300">
          Building digital experiences through
        </p>
        <TypeAnimation
          sequence={[
            'Full Stack Development',
            1500,
            'Modern Web Applications',
            1500,
            'Scalable Solutions',
            1500,
          ]}
          wrapper="span"
          speed={30}
          className="text-2xl md:text-3xl font-bold text-gray-100"
          repeat={Infinity}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="https://raw.githubusercontent.com/hack-09/Portfolio/main/docs/PriyanshuKumar.pdf"
            download="Priyanshu_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
          >
            <FiDownload className="text-xl" />
            Download Resume
          </a>
          <div className="flex gap-4">
            <a
              href="https://github.com/hack-09"
              className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FiGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshukumar9/"
              className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-2xl" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="mt-12 md:mt-0 md:w-1/2 flex justify-center z-10"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-purple-600 to-blue-500 opacity-60 blur-xl"></div>
          <motion.img
            src="https://avatars.githubusercontent.com/u/121863049?v=4"
            alt="Priyanshu - Full Stack Developer"
            className="relative rounded-full border-4 border-gray-700 w-25 h-25 md:w-85 md:h-85 shadow-2xl hover:border-purple-500 transition-all duration-500 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-18 h-18 border-2 rounded-full border-gray-400 relative">
          <div className="w-19 h-18 bg-gray-400 rounded-full absolute top-2 left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeFirstSec;