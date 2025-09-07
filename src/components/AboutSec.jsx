import React from 'react';
import { motion } from 'framer-motion';

const AboutSec = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A brief introduction about yourself.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <motion.img
              src="/path/to/your/image.jpg"
              alt="About Me"
              className="rounded-xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-4">
              Detailed description about yourself, your passion, and your journey.
            </p>
            <p className="text-gray-300 mb-4">
              More details about your skills and what you are looking for.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;