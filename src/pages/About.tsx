import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Button from '../components/Button';
import { profileData } from '../config/projects';

const About: React.FC = () => {
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
      transition: { duration: 0.6 },
    },
  };
  
  return (
    <div className="bg-gray-50 dark:bg-dark-300 min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Learn more about my journey, skills, and what drives me as a creative developer.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="relative rounded-xl overflow-hidden aspect-square mb-6">
                <img
                  src="https://images.pexels.com/photos/7948048/pexels-photo-7948048.jpeg"
                  alt={profileData.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Decorative elements */}
                <div className="absolute inset-0 border-4 border-white dark:border-dark-200 opacity-50"></div>
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary-500/20 rounded-full"></div>
                <div className="absolute -top-3 -left-3 w-16 h-16 bg-accent-500/20 rounded-full"></div>
              </div>
              
              <div className="bg-white dark:bg-dark-200 rounded-xl shadow-md p-6">
                <h2 className="font-display text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Download CV
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  For a complete overview of my experience and skills, download my CV.
                </p>
                <Button
                  href="#"
                  variant="primary"
                  icon={<Download size={18} />}
                  className="w-full"
                >
                  Download CV
                </Button>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="md:col-span-2">
              <div className="bg-white dark:bg-dark-200 rounded-xl shadow-md p-6 md:p-8 mb-8">
                <h2 className="font-display text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  My Story
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>{profileData.about.intro}</p>
                  <p>{profileData.about.description}</p>
                  <p>
                    Based in {profileData.contact.location}, I work with clients globally to create memorable digital experiences that stand out in the crowded online landscape.
                  </p>
                  <p>
                    When I'm not coding, you can find me sketching anime characters, exploring new animation techniques, or playing video games for inspiration.
                  </p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-dark-200 rounded-xl shadow-md p-6 md:p-8">
                <h2 className="font-display text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Skills & Expertise
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                      Development
                    </h3>
                    <ul className="space-y-2">
                      {profileData.about.skills.filter(skill => 
                        ['React', 'TypeScript', 'Three.js', 'Framer Motion'].includes(skill)
                      ).map(skill => (
                        <li key={skill} className="flex items-center text-gray-600 dark:text-gray-400">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                      Design
                    </h3>
                    <ul className="space-y-2">
                      {profileData.about.skills.filter(skill => 
                        ['UI/UX Design', 'Animation', 'Illustration'].includes(skill)
                      ).map(skill => (
                        <li key={skill} className="flex items-center text-gray-600 dark:text-gray-400">
                          <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                    Education
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Bachelor of Fine Arts in Digital Media</p>
                      <p className="text-gray-600 dark:text-gray-400">Tokyo Design Academy, 2018-2021</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Certificate in Advanced Web Development</p>
                      <p className="text-gray-600 dark:text-gray-400">Frontend Masters, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;