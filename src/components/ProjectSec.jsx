import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronDown, FiGrid, FiList, FiFilter, FiCode, FiGlobe, FiSmartphone, FiMonitor, FiX } from "react-icons/fi";

const ProjectSec = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const projects = [
    {
      id: 0,
      title: "TrueCheck",
      description: "A product verification system that enables users to check authenticity using QR code scanning or manual code input. Built to combat counterfeit products and improve trust between brands and customers.",
      tech: ["React", "Firebase", "Tailwind CSS", "jsQR"],
      github: "https://github.com/hack-09/product-verification",
      demo: "https://product-verification-two.vercel.app/",
      category: "Full Stack",
      image: "https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/src/assets/truecheck.png",
      accentColor: "from-purple-500 to-indigo-600"
    },
    {
      id: 1,
      title: "TaskFlow",
      description: "Advanced task management platform with real-time collaboration and JWT authentication",
      tech: ["MERN Stack", "JWT", "WebSockets", "Redis", "Postman"],
      github: "https://github.com/hack-09/TaskFlow",
      demo: "https://task-management-self-sigma.vercel.app/dashboard",
      category: "Full Stack",
      image: "https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/src/assets/taskflow.png",
      accentColor: "from-blue-500 to-cyan-600"
    },
    {
      id: 2,
      title: "Eventify",
      description: "Event management system with real-time attendee tracking and analytics dashboard",
      tech: ["MERN Stack", "JWT", "MongoDB", "Chart.js", "Node.js"],
      github: "https://github.com/hack-09/Eventify",
      demo: "https://event-management-platform-beta.vercel.app/dashboard",
      category: "Web App",
      image: "https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/src/assets/eventify.png",
      accentColor: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Telemedicine",
      description: "Secure healthcare platform with video consultations and EHR integration",
      tech: ["Java", "Android Studio", "Firebase", "Jitsi Meet SDK", "HIPAA Compliance"],
      github: "https://github.com/hack-09/Telemedicine",
      category: "Mobile",
      image: "https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/src/assets/telemedicine.png",
      accentColor: "from-red-500 to-orange-600"
    },
    {
      id: 4,
      title: "Recipe Sharing Platform",
      description: "Community-driven recipe platform with social features and AI-powered recommendations",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/hack-09/Recipe-Sharing",
      demo: "https://recipesharingplatform.onrender.com/",
      category: "Full Stack",
      image: "https://raw.githubusercontent.com/hack-09/Portfolio/refs/heads/main/src/assets/recipe.png",
      accentColor: "from-yellow-500 to-amber-600"
    },
    {
      id: 5,
      title: "Library Management System",
      description: "Automated library system with RFID integration and predictive analytics",
      tech: ["C++", "OOP", "SQLite", "Machine Learning", "Boost Libraries"],
      category: "Desktop",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
      accentColor: "from-indigo-500 to-purple-600"
    },
    {
      id: 6,
      title: "Weather Forecast",
      description: "Real-time weather forecasting app with severe weather alerts system",
      tech: ["React", "OpenWeatherMap API", "Chart.js", "Geolocation", "PWA"],
      github: "https://github.com/hack-09/WhetherForecast",
      demo: "https://hack-09.github.io/WhetherForecast/",
      category: "Web App",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
      accentColor: "from-cyan-500 to-blue-600"
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

  // Category icons
  const getCategoryIcon = (category) => {
    switch(category) {
      case "Web App": return <FiGlobe className="w-4 h-4" />;
      case "Mobile": return <FiSmartphone className="w-4 h-4" />;
      case "Desktop": return <FiMonitor className="w-4 h-4" />;
      default: return <FiCode className="w-4 h-4" />;
    }
  };

  // Project Detail Modal Component
  const ProjectDetailModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <div className="h-48 sm:h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-90"></div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-900/80 hover:bg-gray-800 transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                <span className={`flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${project.accentColor} text-white rounded-full text-sm w-fit`}>
                  {getCategoryIcon(project.category)}
                  {project.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-2 sm:mt-0">{project.title}</h2>
              </div>
              
              <p className="text-gray-300 mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
                  >
                    <FiExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all"
                >
                  <FiGithub className="w-5 h-5" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 sm:py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-40 h-40 sm:w-60 sm:h-60 rounded-full bg-purple-500 blur-[80px] sm:blur-[100px]"></div>
        <div className="absolute bottom-10 right-[15%] w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-blue-500 blur-[100px] sm:blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            A collection of my technical implementations across various domains and platforms
          </p>
          
          {/* Stats summary */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-4 sm:gap-6 flex-wrap">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-xl border border-gray-700 hover:border-purple-500 transition-all"
            >
              <div className="text-xl sm:text-2xl font-bold text-purple-400">{projects.length}</div>
              <div className="text-gray-400 text-sm sm:text-base">Projects</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-xl border border-gray-700 hover:border-blue-500 transition-all"
            >
              <div className="text-xl sm:text-2xl font-bold text-blue-400">{categories.length - 1}</div>
              <div className="text-gray-400 text-sm sm:text-base">Categories</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-xl border border-gray-700 hover:border-teal-500 transition-all"
            >
              <div className="text-xl sm:text-2xl font-bold text-teal-400">20+</div>
              <div className="text-gray-400 text-sm sm:text-base">Technologies</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile Filter Toggle */}
        <div className="block sm:hidden mb-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <FiFilter className="text-purple-400" />
            <span>Filter: {selectedCategory}</span>
          </motion.button>
        </div>

        {/* View Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`${isFilterOpen ? 'block' : 'hidden'} sm:flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-8 gap-4 bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700`}
        >
          <div className="hidden sm:flex items-center gap-2 text-gray-300">
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
                className={`flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProjects(6);
                  setIsFilterOpen(false);
                }}
              >
                {getCategoryIcon(category)}
                {category}
              </motion.button>
            ))}
          </div>
          
          {/* View Toggle */}
          <div className="flex gap-2 bg-gray-700 p-1 rounded-lg mt-4 sm:mt-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-transparent hover:bg-gray-600'}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <FiGrid className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-transparent hover:bg-gray-600'}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <FiList className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-xl sm:text-2xl text-gray-400 mb-4">No projects found in this category</div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-sm sm:text-base"
              onClick={() => setSelectedCategory("All")}
            >
              View All Projects
            </motion.button>
          </div>
        ) : viewMode === 'grid' ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl overflow-hidden flex flex-col h-full"
                whileHover={{ y: -5 }}
                onClick={() => setActiveProject(project)}
              >
                {/* Project Image */}
                <div className="h-40 sm:h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-70"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 z-20">
                    <span className="flex items-center gap-1 px-2 py-1 bg-gray-900/80 text-purple-400 rounded-full text-xs backdrop-blur-sm">
                      {getCategoryIcon(project.category)}
                      <span className="hidden sm:inline ml-1">{project.category}</span>
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold group-hover:text-purple-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <div className="flex gap-1 sm:gap-2">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 sm:p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors"
                          aria-label="Live Demo"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 sm:p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors"
                        aria-label="GitHub Repository"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4 flex-grow line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto pt-3 sm:pt-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-700/50 rounded-full text-xs sm:text-sm hover:bg-gray-600 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs sm:text-sm">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          // List View
          <motion.div
            className="flex flex-col gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative bg-gray-800/70 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 overflow-hidden"
                whileHover={{ x: 5 }}
                onClick={() => setActiveProject(project)}
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="sm:w-1/3 overflow-hidden rounded-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="sm:w-2/3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-0">
                        <span className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs sm:text-sm">
                          {getCategoryIcon(project.category)}
                          {project.category}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold group-hover:text-purple-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex gap-1 sm:gap-2">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors text-xs sm:text-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FiExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Demo</span>
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors text-xs sm:text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiGithub className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mt-4 pt-3 sm:pt-4 border-t border-gray-700">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-700/50 rounded-full text-xs sm:text-sm hover:bg-gray-600 transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-8 sm:mt-12">
            <motion.button
              onClick={() => setVisibleProjects(prev => prev + 3)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Load More Projects
              <FiChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
            </motion.button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectDetailModal 
            project={activeProject} 
            onClose={() => setActiveProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectSec;