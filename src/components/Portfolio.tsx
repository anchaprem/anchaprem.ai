import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { projects } from '../pages/Projects';

const Portfolio = () => {
  const controls = useAnimation();
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Get only the two most recent projects
  const recentProjects = projects.slice(0, 2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="portfolio" className="py-20 bg-[#112240]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-200">Featured Projects</h2>
            <div className="flex-1 h-px bg-gray-700 ml-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {recentProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative bg-[#0a192f] rounded-lg overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-[#64ffda]/20 group-hover:bg-transparent transition-all duration-300" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-200 mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm text-[#64ffda] bg-[#112240] px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#64ffda] transition-colors duration-300"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#64ffda] transition-colors duration-300"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <button
              onClick={() => navigate('/projects')}
              className="inline-block px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] rounded-lg
                hover:bg-[#64ffda]/10 transition-all duration-300 font-mono"
            >
              View More Projects
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 