import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { projects } from '../config/projects';

const Home: React.FC = () => {
  // Filter featured projects for the homepage
  const featuredProjects = projects.filter(project => project.featured);
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };
  
  return (
    <div className="bg-gray-50 dark:bg-dark-300 min-h-screen">
      <HeroSection />
      
      {/* Featured Projects Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="py-20 bg-white dark:bg-dark-200"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Featured Projects
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                A selection of my recent work, showcasing my skills in design and development.
              </p>
            </div>
            
            <Button
              to="/projects"
              variant="text"
              className="mt-4 md:mt-0"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
            >
              View All Projects
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Skills Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="py-20 bg-gray-50 dark:bg-dark-300"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              My Skills
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Technologies and tools I work with to bring creative projects to life.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'Figma', 'Illustration', 'Animation', 'UI/UX Design', 'Three.js'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-200 rounded-lg shadow-md hover:shadow-lg transition-all p-4 text-center"
              >
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Ready to start your next project? I'm available for freelance work and collaborations.
          </p>
          <Button
            to="/contact"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            Get In Touch
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;