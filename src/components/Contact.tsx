import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Linkedin, Github, Send } from 'lucide-react';
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "fcc2ffd8-aa06-4185-9f43-314a2375065d", // Replace with your actual access_key
          ...formData
        })
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I’ll respond within 24 hours."
        });

        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        toast({
          title: "Failed to send message",
          description: result.message || "Please try again later.",
          variant: "destructive"
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Please check your internet connection.",
        variant: "destructive"
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" />,
      title: "Email",
      value: "rs9289592@gmail.com",
      description: "Preferred method of contact",
      link: "mailto:rs9289592@gmail.com"
    },
    {
      icon: <Linkedin className="text-blue-400" />,
      title: "LinkedIn",
      value: "Connect with me",
      description: "Professional networking",
      link: "https://linkedin.com/in/ramandeep-singh-2a4304252"
    },
    {
      icon: <Github className="text-gray-400" />,
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
        <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto px-4">
          I’m actively seeking internship opportunities and open to exciting collaborations. Whether you're hiring or building something cool — reach out!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-6"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Get In Touch</h3>
            <p className="text-gray-300 text-base">
              I'm a passionate computer science student with a strong interest in full-stack development and real-world problem solving.
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
              <Card
                className="p-4 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition cursor-pointer"
                onClick={() => window.open(info.link, '_blank')}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">{info.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-blue-300 text-sm">{info.value}</p>
                    <p className="text-xs text-gray-400">{info.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          <div className="mt-6 p-5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl border border-white/10">
            <div className="flex items-center mb-2">
              <MessageSquare className="text-blue-400 mr-2" />
              <h4 className="text-white font-semibold text-lg">Response Time</h4>
            </div>
            <p className="text-gray-300 text-sm">
              I usually respond within 24 hours. Looking forward to hearing from you!
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-300 mb-2">Full Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="bg-white/10 text-white border-white/20"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-300 mb-2">Email Address *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="bg-white/10 text-white border-white/20"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Company</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                    className="bg-white/10 text-white border-white/20"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Internship Opportunity"
                    className="bg-white/10 text-white border-white/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Message *</label>
                <Textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here..."
                  className="bg-white/10 text-white border-white/20 resize-none"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white">
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 border-t border-white/10 pt-6 text-center"
      >
        <p className="text-gray-400 text-sm">© 2024 Ramandeep Singh. All rights reserved.</p>
        <p className="text-gray-500 text-xs">Built with React, TypeScript, and Tailwind CSS</p>
      </motion.div>
    </div>
  );
};
