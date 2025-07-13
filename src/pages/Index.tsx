
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Navigation } from '../components/Navigation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-inter relative overflow-x-hidden">
      {/* Enhanced background overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-indigo-900/10 pointer-events-none"></div>
      
      <Navigation activeSection={activeSection} />
      
      <section id="home" className="px-4 sm:px-6 lg:px-8 relative">
        <Hero />
      </section>
      
      <section id="about" className="px-4 sm:px-6 lg:px-8 relative">
        <About />
      </section>
      
      <section id="skills" className="px-4 sm:px-6 lg:px-8 relative">
        <Skills />
      </section>
      
      <section id="projects" className="px-4 sm:px-6 lg:px-8 relative">
        <Projects />
      </section>
      
      <section id="contact" className="px-4 sm:px-6 lg:px-8 relative">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
