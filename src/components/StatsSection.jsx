import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiCode, FiUsers, FiCoffee, FiAward } from "react-icons/fi";

const StatsSection = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    coffee: 0,
    awards: 0
  });

  useEffect(() => {
    const targetCounts = {
      projects: 25,
      clients: 18,
      coffee: 500,
      awards: 3
    };

    const duration = 2000; // ms
    const steps = 60;
    const stepDuration = duration / steps;

    const counters = {};
    
    Object.keys(targetCounts).forEach(key => {
      counters[key] = setInterval(() => {
        setCounts(prev => ({
          ...prev,
          [key]: Math.min(prev[key] + Math.ceil(targetCounts[key] / steps), targetCounts[key])
        }));
      }, stepDuration);
    });

    return () => {
      Object.values(counters).forEach(interval => clearInterval(interval));
    };
  }, []);

  const stats = [
    {
      icon: <FiCode className="text-3xl" />,
      value: counts.projects,
      label: "Projects Completed",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <FiUsers className="text-3xl" />,
      value: counts.clients,
      label: "Happy Clients",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FiCoffee className="text-3xl" />,
      value: counts.coffee,
      label: "Cups of Coffee",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <FiAward className="text-3xl" />,
      value: counts.awards,
      label: "Awards Received",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}+</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;