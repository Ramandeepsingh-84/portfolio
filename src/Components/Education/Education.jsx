import React from 'react';

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    duration: "2022 - 2026",
    description: "Focused on core computer science subjects including Data Structures, Web Development, and Software Engineering.",
    score: "CGPA: 7.71",
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Shiksha Niketan School",
    location: "Jammu & Kashmir, India",
    duration: "2021 - 2022",
    description: "Completed with specialization in Science stream with Mathematics and Computer Science.",
    score: "Percentage: 89.4%",
  },
  {
    id: 3,
    degree: "Secondary Education",
    institution: "Shiksha Niketan School",
    location: "Jammu & Kashmir, India",
    duration: "2019 - 2020",
    description: "Completed foundational education with focus on Mathematics, Science, and English.",
    score: "Percentage: 90%",
  },
];

const Education = () => {
  return (
    <section id="Education" className="bg-[#0b1120] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">🎓 Education</h2>
        <div className="space-y-10">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="border-l-4 border-purple-600 pl-6 py-4 hover:bg-[#111827] rounded transition-all"
            >
              <h3 className="text-2xl font-semibold">{edu.degree}</h3>
              <p className="text-lg text-purple-400">
                {edu.institution} <span className="text-gray-400">• {edu.location}</span>
              </p>
              <span className="text-sm text-gray-400">{edu.duration}</span>
              <p className="mt-2 text-gray-300">{edu.description}</p>
              <p className="text-lg text-purple-400">{edu.score}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
