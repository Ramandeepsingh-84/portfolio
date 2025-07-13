
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export const Skills = () => {
  // const skillCategories = [
  //   {
  //     title: "Frontend",
  //     skills: ["React", "Vue.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Nuxt.js"],
  //     color: "from-blue-500 to-cyan-500"
  //   },
  //   {
  //     title: "Backend",
  //     skills: ["Node.js", "Python", "Java", "Express.js", "Django", "Flask", "Spring Boot", "REST APIs", "GraphQL", "Microservices"],
  //     color: "from-indigo-500 to-purple-500"
  //   },
  //   {
  //     title: "Database",
  //     skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase", "Prisma", "Mongoose", "SQL", "NoSQL"],
  //     color: "from-green-500 to-emerald-500"
  //   },
  //   {
  //     title: "DevOps & Tools",
  //     skills: ["Docker", "AWS", "Git", "GitHub", "Vercel", "Netlify", "CI/CD", "Linux", "Nginx", "Webpack"],
  //     color: "from-orange-500 to-red-500"
  //   },
  //   {
  //     title: "Mobile & Other",
  //     skills: ["React Native", "Flutter", "Electron", "PWA", "WebRTC", "Socket.io", "Jest", "Cypress", "Figma", "Adobe XD"],
  //     color: "from-violet-500 to-pink-500"
  //   }
  // ];

  const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React", "Vue.js", "Angular", "TypeScript", "JavaScript",
      "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Nuxt.js"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend",
    skills: [
      "Node.js", "Python", "Java", "Express.js", "Django",
      "Flask", "Spring Boot", "REST APIs", "GraphQL", "Microservices"
    ],
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Database",
    skills: [
      "MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase",
      "Supabase", "Prisma", "Mongoose", "SQL", "NoSQL"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Core CS Subjects",
    skills: [
      "Data Structures & Algorithms", "Object-Oriented Programming",
      "DBMS", "Operating Systems", "Computer Networks"
    ],
    color: "from-yellow-500 to-amber-500"
  },
  // {
  //   title: "Mobile & Other",
  //   skills: [
  //     "React Native", "Flutter", "Electron", "PWA", "WebRTC",
  //     "Socket.io", "Jest", "Cypress", "Figma", "Adobe XD"
  //   ],
  //   color: "from-violet-500 to-pink-500"
  // }
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
          Skills & Technologies
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 sm:mb-8"></div>
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
          Here are the technologies and tools I work with to bring ideas to life
        </p>
      </motion.div>

      <div className="space-y-8 sm:space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className={`w-1 h-6 sm:h-8 bg-gradient-to-b ${category.color} rounded-full mr-3 sm:mr-4`}></div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {category.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: categoryIndex * 0.1 + skillIndex * 0.05 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-white border-white/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 sm:mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-white/10">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Always Learning
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
            tools, and best practices to stay at the forefront of web development.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
