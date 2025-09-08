import React from "react";
import { motion } from "framer-motion";
import { 
  FiCode, FiCloud, FiDatabase, FiTool, 
  FiTerminal, FiBox, FiCpu, FiLayers,
  FiArrowRight
} from "react-icons/fi";

const HomeSecondSec = () => {
  const skills = [
    {
      title: "Programming Languages",
      items: ["C++", "Java", "Python", "JavaScript"],
      icon: <FiTerminal className="w-5 h-5" />,
      color: "from-purple-500 to-indigo-600",
      delay: 0.1
    },
    {
      title: "Frontend Development",
      items: ["HTML/CSS", "React.js", "Tailwind CSS", "Bootstrap"],
      icon: <FiCode className="w-5 h-5" />,
      color: "from-green-500 to-emerald-600",
      delay: 0.2
    },
    {
      title: "Backend Development",
      items: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
      icon: <FiCpu className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-600",
      delay: 0.3
    },
    {
      title: "Database & Cloud",
      items: ["MongoDB", "Firebase", "SQL", "AWS"],
      icon: <FiCloud className="w-5 h-5" />,
      color: "from-yellow-500 to-amber-600",
      delay: 0.4
    },
    {
      title: "DevOps & Tools",
      items: ["Git/GitHub", "Docker", "CI/CD", "Jira"],
      icon: <FiTool className="w-5 h-5" />,
      color: "from-pink-500 to-rose-600",
      delay: 0.5
    },
    {
      title: "Testing & Debugging",
      items: ["Postman", "Jest", "Selenium", "Chrome DevTools"],
      icon: <FiBox className="w-5 h-5" />,
      color: "from-red-500 to-orange-600",
      delay: 0.6
    },
    {
      title: "Mobile Development",
      items: ["Android Studio", "SDK"],
      icon: <FiLayers className="w-5 h-5" />,
      color: "from-indigo-500 to-blue-600",
      delay: 0.7
    },
    {
      title: "Other Technologies",
      items: ["WebSockets", "WebRTC", "OAuth", "JWT"],
      icon: <FiDatabase className="w-5 h-5" />,
      color: "from-cyan-500 to-teal-600",
      delay: 0.8
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  return (
    <div
      id="skills"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
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

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I've mastered through hands-on experience and continuous learning
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group relative p-6 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
            >
              {/* Gradient border effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -m-0.5`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{skill.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i + skill.delay }}
                      className="px-3 py-1.5 bg-gray-700/50 rounded-full text-sm text-white hover:bg-gray-600/50 transition-colors cursor-default backdrop-blur-sm"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">Ready to bring your ideas to life?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
          >
            Let's Build Something Amazing
            <FiArrowRight className="ml-2" />
          </motion.a>
        </motion.div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
          100% { opacity: 0.2; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default HomeSecondSec;