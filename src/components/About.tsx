import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-200">About Me</h2>
            <div className="flex-1 h-px bg-gray-700 ml-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <div className="md:mt-0 mt-6">
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-300 mb-6 leading-relaxed"
                >
                  👋 Hey there! I'm <span className="text-[#64ffda]">Ancha Premchand</span> hailing from the vibrant town of Bapatla. Currently in my Third year studying Software Engineering at <span className="text-[#64ffda]">Bapatla Engineering College</span>, I'm someone who thrives on tackling challenges spanning a multitude of domains.
                </motion.p>
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-300 mb-6 leading-relaxed"
                >
                  Passionate about crafting dynamic websites with <span className="text-[#64ffda]">Javascript</span>, I excel in <span className="text-[#64ffda]">Java, Python</span>, and solving intricate coding problems. Let's push tech boundaries together! Feel free to reach out for assistance, inquiries, or a friendly chat about all things tech! 😊 Let's collaborate and make an impact together! 🚀
                </motion.p>
                <motion.a 
                  variants={itemVariants}
                  href="https://drive.google.com/file/d/1P_m1JSACLiLvPxYTLdHg73uZ7n2cQUzf/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] rounded-lg
                    hover:bg-[#64ffda]/10 transition-all duration-300 font-mono"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative order-1 md:order-2">
              <div className="relative mx-auto">
                <div className="aspect-[3/4] md:aspect-auto">
                  <motion.img
                    src="https://res.cloudinary.com/dn0jgzymu/image/upload/v1708834425/profotile/IMG_20230905_083838_583_ncksvj.jpg"
                    alt="Profile"
                    className="rounded-lg w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 border-2 border-[#64ffda] rounded-lg transform translate-x-4 translate-y-4 -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                </div>
              </div>
              <motion.a 
                variants={itemVariants}
                href="https://drive.google.com/file/d/1P_m1JSACLiLvPxYTLdHg73uZ7n2cQUzf/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden mt-8 block w-3/4 mx-auto text-center px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] rounded-lg
                  hover:bg-[#64ffda]/10 transition-all duration-300 font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-12">
            <div className="stats-scroll-container">
              <div className="stats-scroll-content">
                {[...Array(3)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="flex space-x-12"
                    variants={itemVariants}
                  >
                    <div className="text-center min-w-[140px]">
                      <span className="block text-4xl font-bold text-[#64ffda] mb-2">20k+</span>
                      <span className="text-gray-400">Lines of Code</span>
                    </div>
                    <div className="text-center min-w-[140px]">
                      <span className="block text-4xl font-bold text-[#64ffda] mb-2">10+</span>
                      <span className="text-gray-400">Projects</span>
                    </div>
                    <div className="text-center min-w-[140px]">
                      <span className="block text-4xl font-bold text-[#64ffda] mb-2">1+</span>
                      <span className="text-gray-400">Years Experience</span>
                    </div>
                    <div className="text-center min-w-[140px]">
                      <span className="block text-4xl font-bold text-[#64ffda] mb-2">10+</span>
                      <span className="text-gray-400">Certifications</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 