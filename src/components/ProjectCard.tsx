import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../config/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl overflow-hidden bg-white dark:bg-dark-200 shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white">
            {project.title}
          </h3>
          
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            aria-label={`View ${project.title} project`}
          >
            <ExternalLink size={18} />
          </a>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {project.featured && (
          <div className="absolute top-4 right-4 bg-accent-500 text-white text-xs font-medium px-2 py-1 rounded">
            Featured
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;