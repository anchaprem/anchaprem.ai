import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiUser, FiCode, FiAward, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { BiTask } from 'react-icons/bi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const navItems = [
    { name: 'Home', icon: FiHome, to: 'home' },
    { name: 'About', icon: FiUser, to: 'about' },
    { name: 'Skills', icon: FiCode, to: 'skills' },
    { name: 'Projects', icon: BiTask, to: 'portfolio' },
    { name: 'Achievements', icon: FiAward, to: 'accomplishments' },
    { name: 'Contact', icon: FiMail, to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle navbar background
      setScrolled(currentScrollY > 50);

      // Handle mobile bottom nav visibility
      if (currentScrollY < 50) {
        setShowMobileNav(true);
      } else {
        setShowMobileNav(currentScrollY < lastScrollY);
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });

    navItems.forEach(({ to }) => {
      const element = document.getElementById(to);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [lastScrollY]);

  const Logo = () => (
    <RouterLink 
      to="/"
      className="text-2xl font-bold text-[#64ffda] font-mono hover:text-[#9CFFEA] transition-colors"
    >
      anchaprem
    </RouterLink>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300
          ${scrolled ? 'bg-[#0a192f]/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Logo />

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ name, to }, index) => (
                <ScrollLink
                  key={name}
                  to={to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer text-sm font-mono relative group
                    ${activeSection === to ? 'text-[#64ffda]' : 'text-gray-400'}`}
                >
                  <span className="text-[#64ffda] opacity-70 mr-2">0{index + 1}.</span>
                  {name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#64ffda] transition-all duration-300 group-hover:w-full" />
                </ScrollLink>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ y: showMobileNav ? 0 : 100 }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-0 left-0 w-full bg-[#112240]/90 backdrop-blur-sm z-50 md:hidden
          border-t border-[#64ffda]/10`}
      >
        <div className="flex justify-around items-center py-3 px-4">
          {navItems.map(({ icon: Icon, to }) => (
            <ScrollLink
              key={to}
              to={to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="relative group"
            >
              <div
                className={`p-3 rounded-full transition-all duration-300 relative
                  ${activeSection === to 
                    ? 'text-[#64ffda] bg-[#64ffda]/10' 
                    : 'text-gray-400 hover:text-[#64ffda] hover:bg-[#64ffda]/5'}`}
              >
                <Icon className="w-6 h-6" />
                {activeSection === to && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-1/2 w-1 h-1 bg-[#64ffda] rounded-full"
                    style={{ x: '-50%' }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            </ScrollLink>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0a192f]/90 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed right-0 top-0 h-full w-3/4 bg-[#112240] p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-6">
                {navItems.map(({ name, icon: Icon, to }, index) => (
                  <ScrollLink
                    key={name}
                    to={to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-4 text-lg font-mono
                      ${activeSection === to ? 'text-[#64ffda]' : 'text-gray-400'}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>
                      <span className="text-[#64ffda] opacity-70 mr-2">0{index + 1}.</span>
                      {name}
                    </span>
                  </ScrollLink>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 