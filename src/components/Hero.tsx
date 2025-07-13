
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/20 to-indigo-900/40 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          {/* Greeting with icon */}
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 animate-pulse" />
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-medium">
              Hello, I'm
            </p>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          {/* Name with enhanced styling */}
          <div className="relative mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-4 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Ramandeep
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Singh
              </span>
            </h1>
            
            {/* Animated underline */}
            <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Title with enhanced styling */}
          <div className="relative">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-blue-300/80 font-medium">
              MERN Stack Specialist
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-4xl mx-auto px-2"
        >
          Computer Science student at Lovely Professional University with expertise in 
          MERN stack development. Specialized in building scalable web applications with 
          modern technologies including React.js, Node.js, and MongoDB.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-2"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl shadow-blue-500/25"
            onClick={() => scrollToAbout()}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            View My Work
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-blue-400/30 bg-slate-800/50 hover:bg-blue-900/30 text-blue-100 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold backdrop-blur-sm transition-all duration-300 hover:border-blue-400/60"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download size={16} className="mr-2" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-3 sm:space-x-6 mb-8 sm:mb-12"
        >
          <Button
            variant="ghost"
            size="lg"
            className="text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300 p-2 sm:p-3 rounded-xl border border-transparent hover:border-blue-400/30 group"
            onClick={() => window.open('https://github.com/Ramandeepsingh-84', '_blank')}
          >
            <Github size={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300 p-2 sm:p-3 rounded-xl border border-transparent hover:border-blue-400/30 group"
            onClick={() => window.open('https://linkedin.com/in/ramandeep-singh-2a4304252', '_blank')}
          >
            <Linkedin size={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-gray-400 hover:text-white hover:bg-green-500/20 transition-all duration-300 p-2 sm:p-3 rounded-xl border border-transparent hover:border-green-400/30 group"
            onClick={() => window.open('mailto:rs9289592@gmail.com', '_blank')}
          >
            <Mail size={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-gray-400 hover:text-white hover:bg-cyan-500/20 transition-all duration-300 p-2 sm:p-3 rounded-xl border border-transparent hover:border-cyan-400/30 group"
            onClick={() => window.open('tel:9103030155', '_blank')}
          >
            <Phone size={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-cyan-400 transition-all duration-300 animate-bounce hover:scale-110 p-2 rounded-full hover:bg-cyan-400/10"
          >
            <ArrowDown size={20} className="sm:w-6 sm:h-6" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};
