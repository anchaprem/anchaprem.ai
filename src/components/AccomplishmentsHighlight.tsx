import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiAward, FiArrowRight, FiCode } from 'react-icons/fi';
import { getRecentAccomplishments, type Accomplishment } from '../data/accomplishments';

const AccomplishmentsHighlight = () => {
  const recentAccomplishments = getRecentAccomplishments(3);

  return (
    <section id="accomplishments" className="py-20 bg-[#0a192f] relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#64ffda] rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#64ffda] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4 flex items-center gap-3">
                <FiAward className="text-[#64ffda]" />
                Recent Accomplishments
              </h2>
              <p className="text-gray-400 max-w-2xl">
                My latest achievements and certifications in technology and development.
              </p>
            </div>
            <Link
              to="/accomplishments"
              className="hidden md:flex items-center gap-2 text-[#64ffda] hover:text-white transition-colors group"
            >
              View All
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Recent Accomplishments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {recentAccomplishments.map((item: Accomplishment) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#112240] rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300
                  border border-gray-800 hover:border-[#64ffda]/30 group relative"
              >
                {/* Badge */}
                {item.badge && (
                  <div className="absolute -top-3 -right-3 bg-[#64ffda] text-[#0a192f] px-4 py-1 rounded-full
                    text-sm font-semibold shadow-lg transform rotate-12 z-20">
                    {item.badge}
                  </div>
                )}

                {/* Hover Overlay with Links */}
                {(item.certificateLink || item.verificationLink) && (
                  <div className="absolute inset-0 bg-[#0a192f]/90 flex items-center justify-center gap-6
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    {item.certificateLink && (
                      <a
                        href={item.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 text-[#64ffda] hover:text-white 
                          transition-colors duration-300 p-4"
                      >
                        <FiAward className="text-3xl" />
                        <span className="text-sm font-medium">View Certificate</span>
                      </a>
                    )}
                    {item.verificationLink && (
                      <a
                        href={item.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 text-[#64ffda] hover:text-white 
                          transition-colors duration-300 p-4"
                      >
                        <FiCode className="text-3xl" />
                        <span className="text-sm font-medium">Verify Certificate</span>
                      </a>
                    )}
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[#64ffda] text-xl">
                      {item.icon}
                    </div>
                    <span className="text-gray-400 text-sm">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-200 mb-2 group-hover:text-[#64ffda] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#64ffda] text-sm font-mono mb-4">
                    {item.organization}
                  </p>
                  
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-sm text-[#64ffda] bg-[#64ffda]/10 px-3 py-1 rounded-full
                          hover:bg-[#64ffda]/20 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View All Link */}
          <div className="md:hidden text-center">
            <Link
              to="/accomplishments"
              className="inline-flex items-center gap-2 text-[#64ffda] hover:text-white transition-colors group"
            >
              View All Accomplishments
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccomplishmentsHighlight; 