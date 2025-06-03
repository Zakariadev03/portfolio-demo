export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  featured?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Anime Character Generator',
    description: 'AI-powered anime character generator with style customization and export options.',
    tags: ['React', 'TensorFlow.js', 'CSS'],
    imageUrl: 'https://images.pexels.com/photos/5022849/pexels-photo-5022849.jpeg',
    link: '#',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Manga Reading App',
    description: 'A responsive manga reader with library management and bookmark features.',
    tags: ['React Native', 'Firebase', 'Redux'],
    imageUrl: 'https://images.pexels.com/photos/6329158/pexels-photo-6329158.jpeg',
    link: '#',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Anime Soundboard',
    description: 'Interactive soundboard featuring quotes from popular anime series.',
    tags: ['JavaScript', 'Web Audio API', 'SCSS'],
    imageUrl: 'https://images.pexels.com/photos/331198/pexels-photo-331198.jpeg',
    link: '#',
  },
  {
    id: 'project-4',
    title: 'Anime Watchlist',
    description: 'Track your favorite anime shows with ratings and episode progress.',
    tags: ['Vue.js', 'MongoDB', 'Node.js'],
    imageUrl: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg',
    link: '#',
  },
  {
    id: 'project-5',
    title: 'Pixel Art Creator',
    description: 'Digital pixel art creation tool with animation capabilities.',
    tags: ['Canvas API', 'TypeScript', 'React'],
    imageUrl: 'https://images.pexels.com/photos/2295231/pexels-photo-2295231.jpeg',
    link: '#',
  },
  {
    id: 'project-6',
    title: 'Character Database',
    description: 'Searchable database of anime characters with filtering options.',
    tags: ['GraphQL', 'Apollo', 'React'],
    imageUrl: 'https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg',
    link: '#',
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'Github',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'Twitter',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'Linkedin',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: 'Instagram',
  },
];

export const profileData = {
  name: 'Yuki Tanaka',
  title: 'Creative Developer',
  specialties: ['UI/UX Designer', 'Frontend Developer', 'Illustrator', 'Animator'],
  about: {
    intro: "Hello! I'm Yuki, a creative developer passionate about bringing stories to life through code and design.",
    description: "With 5+ years of experience in frontend development and UI/UX design, I specialize in creating interactive experiences inspired by anime and Japanese aesthetics. My work combines technical precision with artistic vision to build applications that are both functional and visually striking.",
    skills: ["React", "TypeScript", "Animation", "Illustration", "UI/UX Design", "Three.js", "Framer Motion"]
  },
  contact: {
    email: "hello@example.com",
    location: "Tokyo, Japan"
  }
};