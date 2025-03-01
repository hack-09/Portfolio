import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiCloud, FiDatabase, FiTool, FiTerminal, FiBox } from "react-icons/fi";

const HomeSecondSec = () => {
  const skills = [
    {
      title: "Programming Languages",
      items: ["C++", "Java", "Python", "JavaScript"],
      icon: <FiTerminal className="w-6 h-6" />,
      color: "from-purple-500 to-blue-500",
    },
    {
      title: "Web Development",
      items: ["HTML/CSS", "React.js", "Node.js", "REST APIs"],
      icon: <FiCode className="w-6 h-6" />,
      color: "from-green-500 to-cyan-500",
    },
    {
      title: "Database & Cloud",
      items: ["MongoDB", "Firebase", "SQL", "NoSQL", "AWS"],
      icon: <FiCloud className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Development & DevOps",
      items: ["Git/GitHub", "Jira", "CI/CD (GitHub Actions, Vercel, Render)"],
      icon: <FiTool className="w-6 h-6" />,
      color: "from-pink-500 to-red-500",
    },
    {
      title: "Testing & Debugging",
      items: ["Postman (API testing)", "Manual Testing", "Selenium"],
      icon: <FiBox className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Tools & Platforms",
      items: ["VS Code", "Android Studio", "Microsoft Azure"],
      icon: <FiDatabase className="w-6 h-6" />,
      color: "from-cyan-500 to-green-500",
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
    <div
      id="skills"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Technologies and tools I've mastered through hands-on experience and continuous learning
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <li
                      key={i}
                      className="px-3 py-1.5 bg-gray-700 rounded-full text-sm hover:bg-gray-600 transition-colors cursor-default"
                    >
                      {item.split('(').map((part, j) => (
                        <span key={j} className={j === 0 ? "text-gray-100" : "text-gray-400"}>
                          {part.replace(')', '')}
                          {j === 0 && item.includes('(') && ' ('}
                        </span>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSecondSec;