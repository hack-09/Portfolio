import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronDown, FiGrid, FiList, FiFilter } from "react-icons/fi";

const ProjectSec = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const projects = [
    {
      id: 1,
      title: "TaskFlow",
      description: "Advanced task management platform with real-time collaboration and JWT authentication",
      tech: ["MERN Stack", "JWT", "WebSockets", "Redis", "Postman"],
      github: "https://github.com/hack-09/TaskFlow",
      demo: "https://task-management-self-sigma.vercel.app/dashboard",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "Eventify",
      description: "Event management system with real-time attendee tracking and analytics dashboard",
      tech: ["MERN Stack", "JWT", "MongoDB", "Chart.js", "Node.js"],
      github: "https://github.com/hack-09/Eventify",
      demo: "https://event-management-platform-beta.vercel.app/dashboard",
      category: "Web App",
    },
    {
      id: 3,
      title: "Telemedicine",
      description: "Secure healthcare platform with video consultations and EHR integration",
      tech: ["Java", "Android Studio", "Firebase", "Jitsi Meet SDK", "HIPAA Compliance"],
      github: "https://github.com/hack-09/Telemedicine",
      category: "Mobile",
    },
    {
      id: 4,
      title: "Recipe Sharing Platform",
      description: "Community-driven recipe platform with social features and AI-powered recommendations",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/hack-09/Recipe-Sharing",
      demo: "https://recipesharingplatform.onrender.com/",
      category: "Full Stack",
    },
    {
      id: 5,
      title: "Library Management System",
      description: "Automated library system with RFID integration and predictive analytics",
      tech: ["C++", "OOP", "SQLite", "Machine Learning", "Boost Libraries"],
      category: "Desktop",
    },
    {
      id: 6,
      title: "Weather Forecast",
      description: "Real-time weather forecasting app with severe weather alerts system",
      tech: ["React", "OpenWeatherMap API", "Chart.js", "Geolocation", "PWA"],
      github: "https://github.com/hack-09/WhetherForecast",
      demo: "https://hack-09.github.io/WhetherForecast/",
      category: "Web App",
    },
  ];

  // Extract unique categories
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  
  // Filter projects based on category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Animation variants
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
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-60 h-60 rounded-full bg-purple-500 blur-[100px]"></div>
        <div className="absolute bottom-10 right-[15%] w-80 h-80 rounded-full bg-blue-500 blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
            Portfolio Showcase
          </h2>
          <p className="text-center text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my technical implementations across various domains and platforms
          </p>
          
          {/* Stats summary */}
          <div className="flex justify-center mt-8 gap-6 flex-wrap">
            <div className="text-center bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-700">
              <div className="text-2xl font-bold text-purple-400">{projects.length}</div>
              <div className="text-gray-400">Projects</div>
            </div>
            <div className="text-center bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-700">
              <div className="text-2xl font-bold text-blue-400">{categories.length - 1}</div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div className="text-center bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-700">
              <div className="text-2xl font-bold text-teal-400">20+</div>
              <div className="text-gray-400">Technologies</div>
            </div>
          </div>
        </motion.div>

        {/* View Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700">
          <div className="flex items-center gap-2 text-gray-300">
            <FiFilter className="text-purple-400" />
            <span>Filter by:</span>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProjects(3);
                }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          {/* View Toggle */}
          <div className="flex gap-2 bg-gray-700 p-1 rounded-lg">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-purple-600' : 'bg-transparent hover:bg-gray-600'}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <FiGrid className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-purple-600' : 'bg-transparent hover:bg-gray-600'}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <FiList className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-2xl text-gray-400 mb-4">No projects found in this category</div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-purple-600 rounded-lg"
              onClick={() => setSelectedCategory("All")}
            >
              View All Projects
            </motion.button>
          </div>
        ) : viewMode === 'grid' ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl overflow-hidden flex flex-col h-full"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <div className="relative z-10 flex flex-col h-full">
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
                          className="p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors"
                          aria-label="Live Demo"
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-sm hover:bg-gray-600 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          // List View
          <motion.div
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 overflow-hidden"
                whileHover={{ x: 5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                    </div>
                    <div className="flex gap-2">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors"
                        >
                          <FiExternalLink className="w-4 h-4" />
                          <span>Demo</span>
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors"
                      >
                        <FiGithub className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-sm hover:bg-gray-600 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <motion.button
              onClick={() => setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length))}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl"
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