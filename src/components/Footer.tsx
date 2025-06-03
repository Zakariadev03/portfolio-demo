import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { socialLinks, profileData } from '../config/projects';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={20} />;
      case 'Twitter':
        return <Twitter size={20} />;
      case 'Linkedin':
        return <Linkedin size={20} />;
      case 'Instagram':
        return <Instagram size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-100 dark:bg-dark-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
              YUKI<span className="text-accent-500">.</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-xs">
              Creating digital experiences that blend creativity with technical excellence.
            </p>
            <div className="flex space-x-4">
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
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">UI/UX Design</li>
              <li className="text-gray-600 dark:text-gray-400">Web Development</li>
              <li className="text-gray-600 dark:text-gray-400">Illustration</li>
              <li className="text-gray-600 dark:text-gray-400">Animation</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{profileData.contact.email}</p>
            <p className="text-gray-600 dark:text-gray-400">{profileData.contact.location}</p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-dark-100 pt-8">
          <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
            © {currentYear} {profileData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;