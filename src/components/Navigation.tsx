
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

export const Navigation = ({ activeSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-blue-500/20 shadow-lg shadow-blue-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Code className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ramandeep
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border border-blue-400/40 shadow-lg shadow-blue-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-blue-500/10 hover:border-blue-400/20 border border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-blue-500/10 transition-all duration-300 border border-transparent hover:border-blue-400/30"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4"
          >
            <div className="px-2 pt-2 pb-4 space-y-2 bg-slate-800/60 rounded-xl mt-2 border border-blue-500/20 backdrop-blur-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium w-full text-left transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border border-blue-400/40'
                      : 'text-gray-300 hover:text-white hover:bg-blue-500/20 border border-transparent hover:border-blue-400/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
