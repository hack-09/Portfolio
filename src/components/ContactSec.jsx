import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

const ContactSec = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or tech innovations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <FiMail className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">Email Directly</h3>
              </div>
              <a
                href="mailto:priyanshukumar9780@gmail.com"
                className="text-gray-300 hover:text-purple-300 transition-colors break-all"
              >
                priyanshukumar9780@gmail.com
              </a>
            </div>

            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <FiLinkedin className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">LinkedIn Profile</h3>
              </div>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-300 transition-colors"
              >
                Connect Professionally
              </a>
            </div>

            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <FiGithub className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">GitHub Contributions</h3>
              </div>
              <a
                href="https://github.com/hack-09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-300 transition-colors"
              >
                View My Code
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
            action="https://formspree.io/f/your-form-id"
            method="POST"
          >
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 px-4 py-3 text-white transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 px-4 py-3 text-white transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 px-4 py-3 text-white transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-lg transition-colors font-medium"
            >
              <FiSend className="w-5 h-5" />
              Send Message
            </button>
          </motion.form>
        </div>

        {/* Status Message */}
        <div className="text-center mt-12 text-gray-400">
          <p>Open for opportunities • Always interested in new challenges</p>
          <div className="flex justify-center gap-4 mt-4">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Available for hire
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSec;