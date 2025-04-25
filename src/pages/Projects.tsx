import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { SiCodesandbox } from 'react-icons/si';
import { useRef } from 'react';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image: string;
  category: string[];
}

export const projects: Project[] = [
  {
    title: "CRESTWOOD SCHOOL",
    description: "A comprehensive school management system with modern UI/UX design, featuring student management, attendance tracking, and grade management.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/crestwood-school",
    live: "https://crestwood-school.com",
    image: "https://res.cloudinary.com/dn0jgzymu/image/upload/v1709216758/profotile/1699682060776_ymnuge.jpg",
    category: ["Web", "Full Stack"]
  },
  {
    title: "Triple DES",
    description: "Implementation of Triple DES encryption algorithm, showcasing cryptographic operations and secure data handling in Python.",
    technologies: ["Python", "Cryptography", "Security"],
    github: "https://github.com/yourusername/triple-des",
    live: "https://triple-des-demo.com",
    image: "https://res.cloudinary.com/dn0jgzymu/image/upload/v1709222677/profotile/Shield-Icon-OCAL_u3qu1g.png",
    category: ["Backend", "Security"]
  },
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with features like product catalog, shopping cart, user authentication, and payment integration.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://modern-ecommerce.com",
    image: "/ecommerce-project.jpg",
    category: ["Web", "Full Stack"]
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with interactive maps, forecast visualization, and location-based weather alerts.",
    technologies: ["React", "TypeScript", "OpenWeather API", "Mapbox"],
    github: "https://github.com/yourusername/weather-dashboard",
    live: "https://weather-dashboard-demo.com",
    image: "/weather-project.jpg",
    category: ["Frontend", "Web"]
  },
  {
    title: "Task Management API",
    description: "RESTful API for task management with features like task creation, assignment, status tracking, and team collaboration.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/yourusername/task-api",
    live: "https://task-api-docs.com",
    image: "/task-api-project.jpg",
    category: ["Backend", "API"]
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const profileLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: <FiGithub size={24} />,
    },
    {
      name: 'CodeSandbox',
      url: 'https://codesandbox.io/u/yourusername',
      icon: <SiCodesandbox size={24} />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0a192f] overflow-hidden" ref={containerRef}>
      {/* Hero Section with Parallax */}
      <motion.div 
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        style={{ opacity }}
      >
        {/* Animated background shapes */}
        <div className="absolute inset-0 z-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full mix-blend-screen"
              style={{
                width: Math.random() * 400 + 100,
                height: Math.random() * 400 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `rgba(100, 255, 218, ${Math.random() * 0.1})`,
                filter: 'blur(100px)',
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, 30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-200 mb-6"
          >
            My Projects
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
          >
            A collection of projects I've worked on, showcasing my skills in web development,
            problem-solving, and creative thinking.
          </motion.p>

          {/* Profile Links */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="flex justify-center gap-6 mb-4">
              {profileLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 rounded-lg border-2 border-[#64ffda] text-[#64ffda]
                    hover:bg-[#64ffda]/10 transition-all duration-300 font-mono relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {link.icon}
                    <span>{link.name}</span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-[#64ffda]/5"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-400 text-sm max-w-2xl text-center"
            >
              Explore more source code and live projects on my GitHub and CodeSandbox profiles.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Projects Grid Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#112240] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl 
                transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Project Image with Overlay */}
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-[#64ffda]/20 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 
                    transition-transform duration-500"
                />
                
                {/* Hover Overlay with Quick Links */}
                <div className="absolute inset-0 bg-[#0a192f]/80 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 z-20 flex items-center justify-center gap-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#64ffda] hover:text-white transform hover:scale-110 
                        transition-all duration-300"
                    >
                      <FiGithub size={30} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#64ffda] hover:text-white transform hover:scale-110 
                        transition-all duration-300"
                    >
                      <FiExternalLink size={30} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-200 mb-4 group-hover:text-[#64ffda] 
                  transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-3 group-hover:line-clamp-none 
                  transition-all duration-300">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm text-[#64ffda] bg-[#64ffda]/10 px-3 py-1 rounded-full
                        hover:bg-[#64ffda]/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 