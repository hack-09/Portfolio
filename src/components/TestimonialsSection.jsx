import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Client Name",
      role: "CEO at Company",
      content: "Priyanshu delivered exceptional work on our project. His attention to detail and problem-solving skills are impressive.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      name: "Colleague Name",
      role: "Senior Developer",
      content: "Working with Priyanshu has been a great experience. He's knowledgeable, reliable, and always delivers quality code.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      name: "Client Name",
      role: "Project Manager",
      content: "The website Priyanshu built for us exceeded our expectations. It's fast, responsive, and exactly what we needed.",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            >
              <div className="flex items-start mb-6">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-purple-400">{testimonials[currentTestimonial].role}</p>
                  <div className="flex mt-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <FiStar key={i} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg italic">
                "{testimonials[currentTestimonial].content}"
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentTestimonial ? "bg-purple-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;