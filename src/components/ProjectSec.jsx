import React, { useState } from 'react';

const ProjectSec = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      title: 'Weather Forecast',
      description: 'A responsive web application for real-time weather forecasts.',
      tech: 'HTML, CSS, JavaScript, OpenWeatherMap API',
      github: 'https://github.com/hack-09/WhetherForecast',
      demo: 'https://hack-09.github.io/WhetherForecast/',
    },
    // Add more projects here...
  ];

  return (
    <div
      id="project"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-gray-400 mb-4">{project.tech}</p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {!showAll && projects.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSec;