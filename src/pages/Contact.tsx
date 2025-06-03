import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { profileData, socialLinks } from '../config/projects';

const Contact: React.FC = () => {
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
  
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <div className="w-10 h-10 bg-gray-100 dark:bg-dark-100 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300">G</div>;
      case 'Twitter':
        return <div className="w-10 h-10 bg-gray-100 dark:bg-dark-100 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300">T</div>;
      case 'Linkedin':
        return <div className="w-10 h-10 bg-gray-100 dark:bg-dark-100 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300">L</div>;
      case 'Instagram':
        return <div className="w-10 h-10 bg-gray-100 dark:bg-dark-100 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300">I</div>;
      default:
        return null;
    }
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
              Get In Touch
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="bg-white dark:bg-dark-200 rounded-xl shadow-md p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="shrink-0 mr-4">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400">
                        <Mail size={18} />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white mb-1">Email</p>
                      <a
                        href={`mailto:${profileData.contact.email}`}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {profileData.contact.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="shrink-0 mr-4">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400">
                        <MapPin size={18} />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white mb-1">Location</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {profileData.contact.location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="shrink-0 mr-4">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400">
                        <Phone size={18} />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white mb-1">Call</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Available upon request
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-4">
                    Connect with me
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label={link.name}
                      >
                        {getIconComponent(link.icon)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="md:col-span-2">
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;