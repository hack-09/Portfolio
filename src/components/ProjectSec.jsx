import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGlobe ,FiSmartphone ,FiMonitor, FiGithub, FiExternalLink, FiChevronDown, FiGrid, FiList, FiFilter, FiX, FiArrowRight, FiPlay, FiCode, FiLayers } from "react-icons/fi";

const ProjectSec = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);
  
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
      image: "https://github.com/hack-09/Portfolio/blob/main/src/assets/taskflow.png",
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
      image: "https://github.com/hack-09/Portfolio/blob/main/src/assets/taskflow.png",
      accentColor: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Telemedicine",
      description: "Secure healthcare platform with video consultations and EHR integration",
      tech: ["Java", "Android Studio", "Firebase", "Jitsi Meet SDK", "HIPAA Compliance"],
      github: "https://github.com/hack-09/Telemedicine",
      category: "Mobile",
      image: "https://github.com/hack-09/Portfolio/blob/main/src/assets/telemedicine.png",
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

  // Project detail modal
  const ProjectDetailModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
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
            <div className="h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-90`}></div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-900/80 hover:bg-gray-800 transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className={`flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${project.accentColor} text-white rounded-full text-sm`}>
                  {getCategoryIcon(project.category)}
                  {project.category}
                </span>
                <h2 className="text-3xl font-bold">{project.title}</h2>
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
              
              <div className="flex gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
                  >
                    <FiPlay className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all"
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
    <div id="projects" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-purple-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse 15s infinite ${i * 2}s`,
              opacity: 0.2 + Math.random() * 0.2,
              transform: `scale(${0.5 + Math.random() * 0.8})`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
            Project Portfolio
          </h2>
          <p className="text-center text-gray-300 text-lg max-w-2xl mx-auto">
            A curated collection of my technical implementations across various domains and platforms
          </p>
          
          {/* Stats summary */}
          <div className="flex justify-center mt-8 gap-6 flex-wrap">
            {[
              { value: projects.length, label: "Projects", color: "from-purple-500 to-indigo-500" },
              { value: categories.length - 1, label: "Categories", color: "from-blue-500 to-cyan-500" },
              { value: "20+", label: "Technologies", color: "from-teal-500 to-green-500" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`text-center bg-gradient-to-br ${stat.color} p-0.5 rounded-xl`}
              >
                <div className="bg-gray-900 rounded-xl px-6 py-4">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700"
        >
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
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProjects(6);
                }}
              >
                {getCategoryIcon(category)}
                {category}
              </motion.button>
            ))}
          </div>
          
          {/* View Toggle */}
          <div className="flex gap-2 bg-gray-700 p-1 rounded-lg">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-transparent hover:bg-gray-600'}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <FiGrid className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-transparent hover:bg-gray-600'}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <FiList className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-2xl text-gray-400 mb-4">No projects found in this category</div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg"
              onClick={() => setSelectedCategory("All")}
            >
              View All Projects
            </motion.button>
          </div>
        ) : (
          <motion.div
            ref={containerRef}
            className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-6'}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`group relative bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-transparent transition-all duration-300 overflow-hidden ${
                  viewMode === 'grid' ? 'h-96' : 'h-auto'
                }`}
                whileHover={{ y: -5 }}
                onClick={() => setActiveProject(project)}
              >
                {/* Project Image with Gradient Overlay */}
                <div className="h-48 overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-80`}></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="flex items-center gap-2 px-3 py-1 bg-gray-900/80 text-white rounded-full text-sm backdrop-blur-sm">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                      View Details
                      <FiArrowRight className="w-4 h-4" />
                    </button>
                    <div className="flex gap-2">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          aria-label="Live Demo"
                        >
                          <FiExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-700 hover:bg-purple-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="GitHub Repository"
                      >
                        <FiGithub className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hover accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <motion.button
              onClick={() => setVisibleProjects(prev => prev + 3)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl"
            >
              Load More Projects
              <FiChevronDown className="w-5 h-5 animate-bounce" />
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

      {/* Custom animation styles */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
          100% { opacity: 0.2; transform: scale(1); }
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};


export default ProjectSec;