import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown } from 'react-icons/fi';
import { DiCode, DiCss3, DiHtml5, DiJavascript, DiReact, DiPython, DiGit, DiDatabase } from 'react-icons/di';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiGraphql } from 'react-icons/si';
import { BsCode, BsCodeSlash, BsTerminal, BsBraces } from 'react-icons/bs';
import gsap from 'gsap';

const TechSymbols = () => {
  const symbols = [
    '<div>', '</div>', 'const', '=>', '{}', '[]', 'async',
    'function', 'return', 'import', 'export', 'interface',
    '&&', '||', '===', '!==', '+=', '*=', '/=', 'class',
    'extends', 'implements', 'private', 'public', 'static',
    'try', 'catch', 'finally', 'throw new Error()', 'await',
    'Promise<T>', '.then()', '.catch()', 'map()', 'filter()',
    'reduce()', 'useState()', 'useEffect()', 'useRef()',
    '<React.Fragment>', '</React.Fragment>', '<>...</>'
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.04] select-none pointer-events-none">
      {symbols.map((symbol, index) => (
        <motion.div
          key={index}
          className="absolute text-[#64ffda] font-mono whitespace-nowrap"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.7,
            scale: 1,
            x: Math.random() * 20 - 10,
            y: Math.random() * 20 - 10
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 5
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
};

const FloatingIcons = () => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const icons = [
    { Icon: DiReact, label: 'React' },
    { Icon: DiJavascript, label: 'JavaScript' },
    { Icon: DiHtml5, label: 'HTML5' },
    { Icon: DiCss3, label: 'CSS3' },
    { Icon: DiCode, label: 'Code' },
    { Icon: SiTypescript, label: 'TypeScript' },
    { Icon: DiPython, label: 'Python' },
    { Icon: DiGit, label: 'Git' },
    { Icon: SiNextdotjs, label: 'Next.js' },
    { Icon: SiTailwindcss, label: 'Tailwind' },
    { Icon: DiDatabase, label: 'Database' },
    { Icon: SiGraphql, label: 'GraphQL' }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {icons.map(({ Icon, label }, index) => (
        <motion.div
          key={index}
          className="absolute cursor-pointer"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
            rotate: 0
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight
            ],
            rotate: [0, 180, 360],
            scale: hoveredIcon === index ? 1.5 : [
              Math.random() * 0.5 + 0.5,
              Math.random() * 0.5 + 1,
              Math.random() * 0.5 + 0.5
            ]
          }}
          transition={{
            duration: Math.random() * 15 + 15, // Faster animations
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            fontSize: `${Math.random() * 80 + 40}px`,
          }}
          onMouseEnter={() => setHoveredIcon(index)}
          onMouseLeave={() => setHoveredIcon(null)}
          whileHover={{ 
            zIndex: 10,
            filter: 'brightness(1.5)',
          }}
        >
          <div className="relative group">
            <div className="text-[#64ffda]/20 transition-all duration-300 group-hover:text-[#64ffda]/40">
              <Icon />
            </div>
            {hoveredIcon === index && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2
                  bg-[#112240] text-[#64ffda] px-3 py-1 rounded-md text-sm font-mono
                  whitespace-nowrap z-50"
              >
                {label}
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const MathEquations = () => {
  const equations = [
    'O(n log n)', 'f(x) = x²', '∑(n)', 'P(A|B)', '∫f(x)dx',
    'x ∈ R', '∀x ∃y', 'λx.x', 'π ≈ 3.14', '2^n', 'log(n)',
    'y = mx + b', 'Δx → 0', '∞', '∅', 'x ⊆ y', '∇f(x,y)',
    'lim x→∞', '∏(n)', 'x ∩ y', 'x ∪ y', 'det(A)', '∠ABC',
    'dx/dt', 'P(n,r)', 'C(n,r)', '∫∫f(x,y)dxdy', '∂f/∂x'
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.03] select-none pointer-events-none">
      {equations.map((eq, index) => (
        <motion.div
          key={index}
          className="absolute text-[#64ffda] font-mono whitespace-nowrap"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.6,
            scale: 1,
            x: Math.random() * 20 - 10,
            y: Math.random() * 20 - 10
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 5
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 16 + 12}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        >
          {eq}
        </motion.div>
      ))}
    </div>
  );
};

const CodeElements = () => {
  const [hoveredElement, setHoveredElement] = useState<number | null>(null);
  const codeElements = [
    { icon: BsCode, label: '<Code>', x: '15%', y: '20%' },
    { icon: BsCodeSlash, label: '</Code>', x: '25%', y: '40%' },
    { icon: BsTerminal, label: 'Terminal', x: '10%', y: '60%' },
    { icon: BsBraces, label: 'Developer', x: '20%', y: '80%' }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {codeElements.map(({ icon: Icon, label, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute cursor-pointer"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: hoveredElement === index ? 1 : 0.4,
            scale: hoveredElement === index ? 1.2 : 1,
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          onMouseEnter={() => setHoveredElement(index)}
          onMouseLeave={() => setHoveredElement(null)}
        >
          <div className="relative group">
            <div className="text-[#64ffda] text-4xl transition-all duration-300 
              group-hover:text-[#64ffda] group-hover:filter group-hover:brightness-150">
              <Icon />
            </div>
            {hoveredElement === index && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2
                  bg-[#112240] text-[#64ffda] px-3 py-1 rounded-md text-sm font-mono
                  whitespace-nowrap z-50"
              >
                {label}
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const ConnectingLines = () => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
      <motion.path
        d="M 100 100 Q 200 200, 300 150 T 400 200"
        stroke="#64ffda"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.path
        d="M 150 200 Q 250 100, 350 250 T 450 150"
        stroke="#64ffda"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 5,
          delay: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </svg>
  );
};

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        const tl = gsap.timeline();
        tl.fromTo(
          textRef.current.children,
          { 
            y: 100, 
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'power4.out',
          }
        );
      }
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      controls.start({
        rotateX: scrollY * 0.02,
        rotateY: scrollY * 0.02,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Left Side Elements */}
        <motion.div
          className="absolute left-0 top-0 w-1/2 h-full"
          style={{
            perspective: '2000px',
            transformStyle: 'preserve-3d'
          }}
          animate={{
            rotateY: mousePosition.x * 0.5,
            rotateX: mousePosition.y * 0.5
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30
          }}
        >
          <CodeElements />
          <ConnectingLines />
        </motion.div>

        {/* Right Side Elements (existing) */}
        <motion.div
          className="absolute right-0 top-0 w-1/2 h-full"
          style={{
            perspective: '2000px',
            transformStyle: 'preserve-3d'
          }}
          animate={{
            rotateY: mousePosition.x * 0.5,
            rotateX: mousePosition.y * 0.5
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30
          }}
        >
          <TechSymbols />
          <MathEquations />
          <FloatingIcons />
        </motion.div>

        {/* Gradient Orbs with enhanced 3D perspective */}
        <div className="absolute inset-0" style={{ perspective: '2500px' }}>
          {/* Left side orb */}
          <motion.div
            className="absolute top-1/4 left-[15%] w-80 h-80 bg-[#64ffda] rounded-full mix-blend-multiply filter blur-xl opacity-10"
            animate={{
              rotateX: [0, 70, 0],
              rotateY: [0, -70, 0],
              scale: [1, 1.4, 1],
              x: [-50, 50, -50],
              y: [-30, 30, -30]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Right side orbs (existing) */}
          <motion.div
            className="absolute top-20 right-[15%] w-72 h-72 bg-[#64ffda] rounded-full mix-blend-multiply filter blur-xl opacity-15"
            animate={{
              rotateX: [0, 60, 0],
              rotateY: [0, -60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Enhanced Grid Pattern with Perspective */}
        <motion.div
          animate={controls}
          className="absolute inset-0 bg-grid-pattern opacity-[0.03]"
          style={{
            perspective: '2500px',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden'
          }}
        />

        {/* Moving Particles with increased count and varied sizes */}
        {Array.from({ length: 40 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              backgroundColor: '#64ffda',
              opacity: Math.random() * 0.4 + 0.2,
              filter: 'blur(0.5px)'
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 7 + 6,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div ref={textRef} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-200 mb-6">
              Hi, I'm{" "}
              <motion.span 
                className="text-[#64ffda] inline-block cursor-default"
                whileHover={{ 
                  scale: 1.1,
                  color: '#9CFFEA',
                  textShadow: '0 0 8px rgba(100, 255, 218, 0.5)'
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 15
                }}
              >
                Ancha Premchand
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-8">
              Full Stack Developer & UI/UX Designer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-70}
              className="group bg-[#64ffda] text-[#0a192f] px-8 py-3 rounded-full font-semibold
                transition-all duration-300 transform hover:scale-105
                hover:shadow-lg hover:shadow-[#64ffda]/20 relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-[#9CFFEA] transform origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Get in Touch</span>
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={800}
              offset={-70}
              className="group border-2 border-[#64ffda] text-[#64ffda] px-8 py-3 rounded-full font-semibold
                transition-all duration-300 transform hover:scale-105
                hover:shadow-lg hover:shadow-[#64ffda]/20 relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-[#64ffda]/10 transform origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">View Work</span>
            </Link>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="cursor-pointer group"
          >
            <FiArrowDown className="text-[#64ffda] text-3xl animate-bounce 
              group-hover:text-[#9CFFEA] transition-colors duration-300
              group-hover:shadow-lg group-hover:shadow-[#64ffda]/20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 