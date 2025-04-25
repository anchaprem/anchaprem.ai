import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  percentage: number;
  color: string;
  icon: string;
}

const Skills = () => {
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

  const firstRowSkills: Skill[] = [
    { name: 'MERN Stack', percentage: 60, color: '#61DAFB', icon: '⚛️' },
    { name: 'C Programming', percentage: 90, color: '#A8B9CC', icon: '💻' },
    { name: 'Java', percentage: 65, color: '#007396', icon: '☕' },
    { name: 'Python', percentage: 75, color: '#3776AB', icon: '🐍' },
    { name: 'HTML & CSS', percentage: 90, color: '#E34F26', icon: '🎨' },
    // Duplicate for infinite scroll
    { name: 'MERN Stack', percentage: 60, color: '#61DAFB', icon: '⚛️' },
    { name: 'C Programming', percentage: 90, color: '#A8B9CC', icon: '💻' },
    { name: 'Java', percentage: 65, color: '#007396', icon: '☕' },
    { name: 'Python', percentage: 75, color: '#3776AB', icon: '🐍' },
    { name: 'HTML & CSS', percentage: 90, color: '#E34F26', icon: '🎨' },
  ];

  const secondRowSkills: Skill[] = [
    { name: 'JavaScript', percentage: 80, color: '#F7DF1E', icon: '⚡' },
    { name: 'React.js', percentage: 60, color: '#61DAFB', icon: '⚛️' },
    { name: 'Node.js', percentage: 60, color: '#339933', icon: '🚀' },
    { name: 'Express.js', percentage: 60, color: '#000000', icon: '🛠️' },
    { name: 'MongoDB', percentage: 60, color: '#47A248', icon: '🗃️' },
    // Duplicate for infinite scroll
    { name: 'JavaScript', percentage: 80, color: '#F7DF1E', icon: '⚡' },
    { name: 'React.js', percentage: 60, color: '#61DAFB', icon: '⚛️' },
    { name: 'Node.js', percentage: 60, color: '#339933', icon: '🚀' },
    { name: 'Express.js', percentage: 60, color: '#000000', icon: '🛠️' },
    { name: 'MongoDB', percentage: 60, color: '#47A248', icon: '🗃️' },
  ];

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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-[#112240] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex items-center mb-16">
            <h2 className="text-3xl font-bold text-gray-200">Skills & Expertise</h2>
            <div className="flex-1 h-px bg-gray-700 ml-6" />
          </motion.div>

          <div className="space-y-12">
            {/* First Row */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#112240] to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#112240] to-transparent z-10" />
              <div className="skills-scroll-container overflow-hidden">
                <div className="skills-scroll-content flex gap-6">
                  {firstRowSkills.map((skill, index) => (
                    <motion.div
                      key={`${skill.name}-${index}`}
                      variants={itemVariants}
                      className="flex-shrink-0 w-[300px] group relative bg-[#0a192f] rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-[#64ffda]"
                      style={{
                        background: `linear-gradient(135deg, #0a192f 0%, #112240 100%)`,
                      }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-2xl">{skill.icon}</span>
                        <div className="flex-1">
                          <h3 className="text-gray-200 font-semibold mb-2 group-hover:text-[#64ffda] transition-colors duration-300">
                            {skill.name}
                          </h3>
                          <div className="relative h-1.5 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                              className="absolute top-0 left-0 h-full rounded-full"
                              style={{
                                background: `linear-gradient(90deg, ${skill.color}88 0%, ${skill.color} 100%)`,
                              }}
                            />
                          </div>
                          <div className="mt-2 flex justify-between items-center">
                            <span className="text-sm text-gray-400">Proficiency</span>
                            <span className="text-sm text-[#64ffda]">{skill.percentage}%</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#112240] to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#112240] to-transparent z-10" />
              <div className="skills-scroll-container overflow-hidden">
                <div className="skills-scroll-content flex gap-6 [animation-direction:reverse]">
                  {secondRowSkills.map((skill, index) => (
                    <motion.div
                      key={`${skill.name}-${index}`}
                      variants={itemVariants}
                      className="flex-shrink-0 w-[300px] group relative bg-[#0a192f] rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-[#64ffda]"
                      style={{
                        background: `linear-gradient(135deg, #0a192f 0%, #112240 100%)`,
                      }}
                    >
                      <div className="flex items-start space-x-4">
                        <span className="text-2xl">{skill.icon}</span>
                        <div className="flex-1">
                          <h3 className="text-gray-200 font-semibold mb-2 group-hover:text-[#64ffda] transition-colors duration-300">
                            {skill.name}
                          </h3>
                          <div className="relative h-1.5 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                              className="absolute top-0 left-0 h-full rounded-full"
                              style={{
                                background: `linear-gradient(90deg, ${skill.color}88 0%, ${skill.color} 100%)`,
                              }}
                            />
                          </div>
                          <div className="mt-2 flex justify-between items-center">
                            <span className="text-sm text-gray-400">Proficiency</span>
                            <span className="text-sm text-[#64ffda]">{skill.percentage}%</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-200 mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Git', 'GitHub', 'VS Code', 'Postman',
                'npm', 'Webpack', 'REST APIs', 'TypeScript',
                'Tailwind CSS', 'Bootstrap', 'Material-UI', 'Firebase'
              ].map((tool) => (
                <motion.div
                  key={tool}
                  variants={itemVariants}
                  className="px-5 py-2.5 bg-[#0a192f] rounded-full text-gray-400 hover:text-[#64ffda] border border-gray-800 hover:border-[#64ffda] transition-all duration-300 cursor-pointer"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 