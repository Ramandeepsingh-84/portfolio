import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Calendar, Users, Shield, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import doctor from '../assets/doctor.png';
import job from '../assets/job.png';
import gfg from '../assets/gfg.jpg';
import DSA from '../assets/DSA.png';
import nptel from '../assets/nptel.png';
import serverside from '../assets/serverside.png';


export const Projects = () => {
  const projects = [
    {
      title: "MediServe - Doctor Appointment System",
      description: "A comprehensive full-stack healthcare platform featuring secure role-based access for admins, doctors, and patients. Includes real-time doctor availability, efficient booking system, and admin dashboard for doctor verification and appointment oversight.",
    image: doctor,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/Ramandeepsingh-84/doctorappointment",
      timeline: "January 2025 – May 2025",
      features: ["Role-based Authentication", "Real-time Availability", "Admin Dashboard", "Responsive UI"],
      featured: true
    },
    {
      title: "JobBridge - MERN Stack Job Portal",
      description: "A dual-interface job portal connecting employers and job seekers. Features advanced job search, resume uploads, real-time application tracking, and secure role-based authentication with responsive design across all devices.",
      image:job,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
      githubUrl: "https://github.com/Ramandeepsingh-84/jobBridge",
      timeline: "November 2024 – February 2025",
      features: ["Advanced Job Search", "Resume Upload", "Application Tracking", "JWT Security"],
      featured: true
    },
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built to showcase projects, skills, and professional information. Optimized for performance and accessibility across desktop and mobile devices with clean UI and smooth navigation.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React.js", "HTML5", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/Ramandeepsingh-84",
      timeline: "April 2025 – May 2025",
      features: ["Responsive Design", "Performance Optimized", "Clean UI", "Mobile-First"],
      featured: false
    }
  ];

  const certifications = [
    {
      title: "Complete Interview Preparation",
      provider: "GeeksforGeeks",
      timeline: "January 2024 – August 2024",
      skills: ["DSA", "OS", "DBMS", "OOPs", "System Design"],
      certificateUrl: gfg

    },
    {
      title: "Cloud Computing",
      provider: "NPTEL",
      timeline: "July 2024 – October 2024",
      skills: ["Virtualization", "IaaS", "PaaS", "SaaS"],
      certificateUrl: nptel

    },
    {
      title: "Data Structures and Algorithms",
      provider: "Udemy",
      timeline: "February 2024 – April 2024",
      skills: ["Arrays", "Trees", "Graphs", "Problem Solving"],
      certificateUrl: DSA

    },
    {
      title: "Server-side JavaScript with Node.js",
      provider: "Coursera",
      timeline: "January 2024 – April 2024",
      skills: ["REST APIs", "Express.js", "MongoDB Integration"],
      certificateUrl: serverside

    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Projects & Achievements
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mb-8"></div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Here are my key projects and certifications that demonstrate my technical skills and commitment to continuous learning
        </p>
      </motion.div>

      {/* Featured Projects */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                    Featured
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar size={14} className="mr-2" />
                  {project.timeline}
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-white/10 text-gray-300 hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800/50"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Additional Projects
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h4>
                    
                    <div className="flex items-center text-gray-400 text-xs mb-3">
                      <Calendar size={12} className="mr-1" />
                      {project.timeline}
                    </div>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-white/10 text-gray-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="bg-white/10 text-gray-300 text-xs"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full text-xs border-gray-600 text-gray-300 hover:bg-gray-800/50"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={12} className="mr-1" />
                      View Code
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {/* Certifications Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-3xl font-bold text-white text-center mb-12">
          Certifications & Learning
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-purple-500/20 rounded-lg mr-4">
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-purple-300 font-medium mb-2">
                    {cert.provider}
                  </p>
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <Calendar size={14} className="mr-2" />
                    {cert.timeline}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 justify-between">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-white/10 text-gray-300 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {cert.certificateUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-500 text-purple-300 hover:bg-purple-500/10 text-xs px-3 py-1"
                    onClick={() => window.open(cert.certificateUrl, '_blank')}
                  >
                    View
                    <ExternalLink size={14} className="ml-1" />
                  </Button>
                )}
              </div>

            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Button
          size="lg"
          variant="outline"
          className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
          onClick={() => window.open('https://github.com/Ramandeepsingh-84', '_blank')}
        >
          <Github size={20} className="mr-2" />
          View All Projects on GitHub
        </Button>
      </motion.div>
    </div>
  );
};
