import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { profileData } from '../config/projects';
import Button from './Button';

const HeroSection: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const specialties = profileData.specialties;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % specialties.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [specialties.length]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };
  
  return (
    <section className="min-h-screen flex items-center py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Hello, I'm {profileData.name}
              <span className="text-accent-500">.</span>
            </motion.h1>
            
            <motion.div
              variants={itemVariants}
              className="h-12 md:h-14 mb-6 overflow-hidden"
            >
              <div className="relative flex flex-col text-primary-600 dark:text-primary-400 font-display text-2xl md:text-3xl font-medium">
                {specialties.map((specialty, index) => (
                  <span
                    key={specialty}
                    className="absolute transition-all duration-500 ease-in-out"
                    style={{
                      opacity: currentTextIndex === index ? 1 : 0,
                      transform: `translateY(${(index - currentTextIndex) * 100}%)`,
                    }}
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-xl"
            >
              Creating beautiful digital experiences with a focus on animation, interactivity, and Japanese-inspired aesthetics.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                to="/projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={20} />}
              >
                View My Work
              </Button>
              
              <Button
                to="/contact"
                variant="outline"
                size="lg"
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            variants={itemVariants}
            className="flex-1 relative"
          >
            <div className="aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400/10 dark:bg-primary-600/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-400/10 dark:bg-secondary-600/10 rounded-full blur-3xl -z-10"></div>
              
              {/* Hero image */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-dark-100 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/7948048/pexels-photo-7948048.jpeg"
                  alt="Developer Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative dots */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent-500 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-primary-500 rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;