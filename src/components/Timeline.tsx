import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FiCalendar, FiBook, FiCode } from 'react-icons/fi';

const Timeline = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const timelineItems = [
    {
      date: 'Sep 2023',
      title: 'UIPath 5-day Workshop',
      duration: '19-09-2023 to 23-09-2023',
      description: 'Learned foundational skills in robotic process automation (RPA), including workflow design, and utilizing UIPath Studio for building automated processes.',
      icon: <FiCode className="text-[#64ffda] text-xl" />,
      tags: ['RPA', 'Automation', 'UIPath']
    },
    {
      date: 'Jun 2023',
      title: '7-Day Backend Web Dev Bootcamp',
      duration: 'Jun-2023',
      description: 'Event conducted by Microsoft Student Ambassadors, learned JavaScript, Express.js, and Node.js, equipping me to build robust server-side applications and APIs.',
      icon: <FiBook className="text-[#64ffda] text-xl" />,
      tags: ['JavaScript', 'Node.js', 'Express']
    },
    {
      date: 'May 2023',
      title: 'Summer Intern at Exposys Data Labs',
      duration: 'May-2023 and Jun-2023',
      description: 'During my Cyber Security internship, I delved into Triple DES encryption, implementing it using Python along with related libraries for cryptographic operations.',
      icon: <FiCalendar className="text-[#64ffda] text-xl" />,
      tags: ['Cyber Security', 'Python', 'Encryption']
    },
  ];

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
    <section id="timeline" className="py-20 bg-[#0a192f] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#64ffda] rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#64ffda] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#64ffda] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">
              My Journey
            </h2>
            <div className="w-24 h-1 bg-[#64ffda] mx-auto rounded-full" />
          </motion.div>

          <div className="relative">
            {/* Vertical line with gradient */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#64ffda]/0 via-[#64ffda] to-[#64ffda]/0" />

            {timelineItems.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className={`flex flex-col md:flex-row gap-8 mb-16 relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot with ripple effect */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#112240] border-2 border-[#64ffda] rounded-full flex items-center justify-center z-10 relative">
                    {item.icon}
                  </div>
                  <div className="absolute w-16 h-16 rounded-full border-2 border-[#64ffda] opacity-0 animate-ping" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#112240] p-8 rounded-xl hover:shadow-2xl transition-all duration-300
                      border border-gray-800 hover:border-[#64ffda]/30 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-[#64ffda] font-mono text-sm">{item.date}</span>
                        <h3 className="text-2xl font-bold text-gray-200 mt-2 group-hover:text-[#64ffda] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{item.duration}</p>
                    <p className="text-gray-400 mb-6 leading-relaxed">{item.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-sm text-[#64ffda] bg-[#64ffda]/10 px-3 py-1 rounded-full
                            hover:bg-[#64ffda]/20 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline; 