import { FiAward, FiCode } from 'react-icons/fi';
import { useState } from 'react';
import { accomplishments, type Accomplishment } from '../data/accomplishments';

const AccomplishmentsPage = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'certification', label: 'Certifications' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'bootcamp', label: 'Bootcamps' },
    { id: 'achievement', label: 'Achievements' }
  ];

  const filteredAccomplishments = accomplishments
    .sort((a: Accomplishment, b: Accomplishment) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((item: Accomplishment) => filter === 'all' ? true : item.type === filter);

  const getCategoryColor = (type: string) => {
    switch(type) {
      case 'certification':
        return 'bg-blue-500';
      case 'workshop':
        return 'bg-purple-500';
      case 'bootcamp':
        return 'bg-green-500';
      case 'achievement':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getCategoryLabel = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <div className="min-h-screen bg-[#0a192f] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">
              Accomplishments
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              A collection of my achievements, certifications, and milestones in technology and development.
            </p>
            <div className="w-24 h-1 bg-[#64ffda] mx-auto rounded-full mb-12" />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-[#64ffda] text-[#0a192f] font-semibold'
                    : 'bg-[#112240] text-gray-400 hover:text-[#64ffda] border border-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Accomplishments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccomplishments.map((item: Accomplishment) => (
              <div
                key={item.id}
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

                {/* Category Label */}
                <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-white text-sm font-medium
                  ${getCategoryColor(item.type)} bg-opacity-90`}>
                  {getCategoryLabel(item.type)}
                </div>

                {/* Card Header with Icon */}
                <div className="relative h-48 bg-gradient-to-br from-[#112240] to-[#0a192f] p-6">
                  <div className="absolute top-4 right-4 text-[#64ffda] opacity-50 group-hover:opacity-100 transition-opacity text-2xl">
                    {item.icon}
                  </div>
                  <div className="h-full flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-[200px] object-contain filter brightness-90 group-hover:brightness-100 transition-all"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-[#64ffda] text-sm font-mono">{item.organization}</span>
                    <h3 className="text-xl font-bold text-gray-200 mt-2 group-hover:text-[#64ffda] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </p>
                  </div>
                  
                  <p className="text-gray-400 mb-6">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccomplishmentsPage; 