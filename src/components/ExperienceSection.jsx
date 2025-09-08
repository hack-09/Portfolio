import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiBook } from "react-icons/fi";

const ExperienceSection = () => {
  const experiences = [
    // {
    //   type: "work",
    //   title: "Full Stack Developer",
    //   company: "Tech Company",
    //   period: "2022 - Present",
    //   description: "Developed and maintained web applications using React, Node.js, and MongoDB."
    // },
    // {
    //   type: "work",
    //   title: "Frontend Developer",
    //   company: "Startup Inc",
    //   period: "2021 - 2022",
    //   description: "Built responsive user interfaces and collaborated with design teams."
    // },
    {
      type: "education",
      title: "Bachelor of Technology in Computer Science",
      company: "Chandigarh University",
      period: "2021 - 2025",
      description: "Graduated with honors. Specialized in web development and software engineering."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-32 py-6 group"
            >
              {/* Timeline line */}
              <div className="absolute left-2 sm:left-28 h-full w-0.5 bg-purple-500 top-0"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-0 sm:left-24 h-4 w-4 rounded-full bg-purple-500 group-hover:bg-purple-700 transition-colors"></div>
              
              {/* Icon */}
              <div className="absolute left-0 sm:left-20 -ml-1 mt-1.5">
                {exp.type === "work" ? (
                  <FiBriefcase className="text-purple-400 text-xl" />
                ) : (
                  <FiBook className="text-purple-400 text-xl" />
                )}
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <span className="sm:ml-4 text-purple-400 text-sm mt-1 sm:mt-0">{exp.period}</span>
                </div>
                <p className="text-purple-300 mb-3">{exp.company}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;