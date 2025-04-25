import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import Projects from './pages/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Accomplishments from './pages/Accomplishments';
import AccomplishmentsHighlight from './components/AccomplishmentsHighlight';
import CustomCursor from './components/CustomCursor';

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/anchaprem.ai/' && location.state?.scrollTo) {
      setTimeout(() => {
        scroller.scrollTo(location.state.scrollTo, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -70,
        });
      }, 100);
    }
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    console.log('App component mounted');
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease',
      disable: 'mobile',
    });
  }, []);

  return (
    <Router basename="/anchaprem.ai">
      <div className="bg-[#0a192f] min-h-screen text-gray-300">
        <CustomCursor />
        <Navbar />
        <ScrollHandler />
        <Routes>
          <Route path="/" element={
            <main className="relative z-10">
              <Hero />
              <About />
              <Skills />
              <Timeline />
              <Portfolio />
              <AccomplishmentsHighlight />
              <Contact />
            </main>
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/accomplishments" element={<Accomplishments />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 