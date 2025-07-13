
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe, Award, Users, Clock, GraduationCap } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const About = () => {
  const expertise = [
    {
      icon: <Code className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400" />,
      title: "Frontend Development",
      description: "React.js, HTML5, CSS3, JavaScript, Tailwind CSS"
    },
    {
      icon: <Database className="w-6 sm:w-8 h-6 sm:h-8 text-indigo-400" />,
      title: "Backend Development",
      description: "Node.js, Express.js, MongoDB, SQL, REST APIs"
    },
    {
      icon: <Smartphone className="w-6 sm:w-8 h-6 sm:h-8 text-cyan-400" />,
      title: "Full Stack Solutions",
      description: "MERN stack development and system architecture"
    },
    {
      icon: <Globe className="w-6 sm:w-8 h-6 sm:h-8 text-green-400" />,
      title: "Problem Solving",
      description: "Data Structures, Algorithms, System Design"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-400" />,
      metric: "3+",
      label: "Major Projects",
      description: "Full-stack applications"
    },
    {
      icon: <Users className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />,
      metric: "4+",
      label: "Certifications",
      description: "Technical expertise"
    },
    {
      icon: <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6 text-green-400" />,
      metric: "7.83",
      label: "CGPA",
      description: "Academic excellence"
    },
    {
      icon: <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-indigo-400" />,
      metric: "2+",
      label: "Years Learning",
      description: "Continuous development"
    }
  ];

  return (
    <div className="py-16 sm:py-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 sm:mb-8"></div>
        <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
          I'm a dedicated Computer Science student at Lovely Professional University with a passion 
          for full-stack development. My expertise spans across modern web technologies including 
          the MERN stack, and I have hands-on experience building scalable applications with 
          real-world impact.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {expertise.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-4 sm:p-6 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group h-full">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-white/10"
      >
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Educational Journey
            </h3>
            <div className="mb-6">
              <h4 className="text-lg sm:text-xl font-semibold text-blue-300 mb-2">
                Bachelor of Technology - Computer Science
              </h4>
              <p className="text-gray-300 mb-1">Lovely Professional University, Punjab</p>
              <p className="text-gray-400 text-sm mb-3">August 2022 – Present | CGPA: 7.83/10</p>
            </div>
            <div className="mb-6">
              <h4 className="text-base sm:text-lg font-semibold text-indigo-300 mb-2">
                Senior Secondary Education
              </h4>
              <p className="text-gray-300 mb-1">Shiksha Niketan School, J&K</p>
              <p className="text-gray-400 text-sm">Class XII | 89.4%</p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
              Currently pursuing my B.Tech in Computer Science with a strong academic record. 
              My coursework includes Computer Networks, Operating Systems, Database Management, 
              and extensive hands-on programming experience.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['Data Structures', 'Algorithms', 'System Design', 'Web Development'].map((skill) => (
                <span key={skill} className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs sm:text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-xl p-3 sm:p-4 text-center border border-white/10"
              >
                <div className="flex justify-center mb-2">
                  {achievement.icon}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {achievement.metric}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-300 mb-1">
                  {achievement.label}
                </div>
                <div className="text-xs text-gray-400">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
