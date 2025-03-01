import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronDown } from "react-icons/fi";

const ProjectSec = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const projects = [
    {
      title: "TaskFlow",
      description: "Advanced task management platform with real-time collaboration and JWT authentication",
      tech: ["MERN Stack", "JWT", "WebSockets", "Redis", "Postman"],
      github: "https://github.com/hack-09/TaskFlow",
      demo: "https://task-management-self-sigma.vercel.app/dashboard",
      category: "Full Stack",
    },
    {
      title: "Eventify",
      description: "Event management system with real-time attendee tracking and analytics dashboard",
      tech: ["MERN Stack", "JWT", "MongoDB", "Chart.js", "Node.js"],
      github: "https://github.com/hack-09/Eventify",
      demo: "https://event-management-platform-beta.vercel.app/dashboard",
      category: "Web App",
    },
    {
      title: "Telemedicine",
      description: "Secure healthcare platform with video consultations and EHR integration",
      tech: ["Java", "Android Studio", "Firebase", "Jitsi Meet SDK", "HIPAA Compliance"],
      github: "https://github.com/hack-09/Telemedicine",
      category: "Mobile",
    },
    {
      title: "Recipe Sharing Platform",
      description: "Community-driven recipe platform with social features and AI-powered recommendations",
      tech: ["React", "Node.js", "MongoDB", "TensorFlow.js", "AWS S3"],
      github: "https://github.com/hack-09/Recipe-Sharing",
      demo: "https://recipesharingplatform.onrender.com/",
      category: "Web App",
    },
    {
      title: "Library Management System",
      description: "Automated library system with RFID integration and predictive analytics",
      tech: ["C++", "OOP", "SQLite", "Machine Learning", "Boost Libraries"],
      category: "Desktop",
    },
    {
      title: "Weather Forecast",
      description: "Real-time weather forecasting app with severe weather alerts system",
      tech: ["React", "OpenWeatherMap API", "Chart.js", "Geolocation", "PWA"],
      github: "https://github.com/hack-09/WhetherForecast",
      demo: "https://hack-09.github.io/WhetherForecast/",
      category: "Web App",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div id="projects" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Showcasing my technical expertise through practical implementations and innovative solutions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-gray-600 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {visibleProjects < projects.length && (
          <div className="text-center mt-12">
            <motion.button
              onClick={() => setVisibleProjects(prev => Math.min(prev + 3, projects.length))}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 mx-auto"
            >
              Load More
              <FiChevronDown className="w-5 h-5 animate-bounce" />
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSec;