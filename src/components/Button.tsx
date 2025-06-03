import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white focus:ring-secondary-500',
    outline: 'border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-dark-100 text-gray-700 dark:text-gray-300 focus:ring-primary-500',
    text: 'bg-transparent hover:bg-gray-100 dark:hover:bg-dark-100 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 focus:ring-primary-500',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );
  
  const buttonClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  const buttonAnimation = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.2 },
  };
  
  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        {...buttonAnimation}
      >
        {buttonContent}
      </motion.a>
    );
  }
  
  if (to) {
    return (
      <motion.div {...buttonAnimation}>
        <Link to={to} className={buttonClass}>
          {buttonContent}
        </Link>
      </motion.div>
    );
  }
  
  return (
    <motion.button 
      type="button" 
      className={buttonClass} 
      onClick={onClick}
      {...buttonAnimation}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;