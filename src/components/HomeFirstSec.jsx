import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';

const HomeFirstSec = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 md:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-purple-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse 15s infinite ${i * 2}s`,
              opacity: 0.3 + Math.random() * 0.2,
              transform: `scale(${0.5 + Math.random() * 0.8})`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between py-16 md:py-24 z-10">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left md:w-1/2 mb-12 md:mb-0"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl mb-2 text-purple-400 font-mono"
          >
            Hello, I'm
          </motion.p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Priyanshu Kumar
          </h1>
          
          <div className="h-16 md:h-20 lg:h-24 mb-6 flex items-center justify-center md:justify-start">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1500,
                'Web Application Specialist',
                1500,
                'Problem Solver',
                1500,
                'Creative Technologist',
                1500,
              ]}
              wrapper="span"
              speed={30}
              className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-100"
              repeat={Infinity}
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-gray-300 text-base md:text-lg max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed"
          >
            I build exceptional digital experiences focused on performance, accessibility, and clean design. 
            Currently specializing in modern web applications and scalable solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <a
              href="https://raw.githubusercontent.com/hack-09/Portfolio/main/docs/PriyanshuKumar.pdf"
              download="Priyanshu_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
            >
              <FiDownload className="text-lg md:text-xl" />
              <span>Download Resume</span>
              <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/hack-09"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-purple-500/20"
                aria-label="GitHub"
              >
                <FiGithub className="text-xl md:text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/priyanshukumar9/"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-blue-500/20"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-xl md:text-2xl" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-cyan-500/20"
                aria-label="Email"
              >
                <FiMail className="text-xl md:text-2xl" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mt-12 md:mt-0 flex justify-center md:justify-end md:w-2/5"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full opacity-70 blur-xl animate-pulse"></div>
            
            {/* Border gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 p-1 transform rotate-0 animate-spin-slow">
              <div className="h-full w-full rounded-full bg-gray-900"></div>
            </div>
            
            {/* Image */}
            <motion.div
              className="relative rounded-full border-4 border-transparent bg-gradient-to-r from-purple-500 to-blue-400 bg-origin-border p-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://avatars.githubusercontent.com/u/121863049?v=4"
                alt="Priyanshu Kumar - Full Stack Developer"
                className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover shadow-2xl"
              />
            </motion.div>
            
            {/* Status indicator */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full border-4 border-gray-900 shadow-lg"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            ></motion.div>
          </div>
        </div>
      </motion.div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
          100% { opacity: 0.3; transform: scale(1); }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default HomeFirstSec;