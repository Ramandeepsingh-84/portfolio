
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Calendar, MessageSquare, Linkedin, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message sent successfully!",
      description: "Thank you for your interest. I'll respond within 24 hours."
    });

    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />,
      title: "Email",
      value: "rs9289592@gmail.com",
      description: "Preferred method of contact",
      link: "mailto:rs9289592@gmail.com"
    },
    {
      icon: <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-indigo-400" />,
      title: "Phone",
      value: "+91 9103030155",
      description: "Available for calls",
      link: "tel:+919103030155"
    },
    {
      icon: <Linkedin className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />,
      title: "LinkedIn",
      value: "Connect with me",
      description: "Professional networking",
      link: "https://linkedin.com/in/ramandeep-singh-2a4304252"
    },
    {
      icon: <Github className="w-5 sm:w-6 h-5 sm:h-6 text-gray-400" />,
      title: "GitHub",
      value: "View my code",
      description: "Open source contributions",
      link: "https://github.com/Ramandeepsingh-84"
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
          Let's Connect
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 sm:mb-8"></div>
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
          I'm actively seeking internship opportunities and open to discussing 
          exciting projects. Whether you're looking for a dedicated developer 
          or want to collaborate on something amazing, let's get in touch!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-8 sm:gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-4 sm:space-y-6"
        >
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Get In Touch
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              I'm a passionate computer science student looking for opportunities 
              to apply my skills in real-world projects. I'm particularly interested 
              in full-stack development roles and internships.
            </p>
          </div>

          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-3 sm:p-4 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer"
                onClick={() => window.open(info.link, '_blank')}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1">
                      {info.title}
                    </h4>
                    <p className="text-blue-300 mb-1 font-medium text-xs sm:text-sm break-all">
                      {info.value}
                    </p>
                    <p className="text-xs text-gray-400">
                      {info.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl border border-white/10"
          >
            <div className="flex items-center mb-3">
              <MessageSquare className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400 mr-2" />
              <h4 className="text-base sm:text-lg font-semibold text-white">Response Time</h4>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm">
              I typically respond to all inquiries within 24 hours. I'm actively 
              looking for opportunities and excited to discuss how I can contribute 
              to your projects.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <Card className="p-6 sm:p-8 bg-white/5 border-white/10 backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Organization
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                    placeholder="Internship Opportunity"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 resize-none"
                  placeholder="Tell me about the opportunity, project requirements, or anything you'd like to discuss..."
                  required
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-white/10 text-center"
      >
        <p className="text-gray-400 mb-2 text-sm sm:text-base">
          © 2024 Ramandeep Singh. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs sm:text-sm">
          Built with React, TypeScript, and Tailwind CSS
        </p>
      </motion.div>
    </div>
  );
};
