import React from 'react';

const AboutMe = () => {
  return (
    <section id="About" className="bg-[#0b1120] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">✨ About Me</h2>
        <div className="bg-[#111827] p-8 rounded-2xl shadow-lg border border-purple-800 leading-relaxed text-lg space-y-6 text-gray-300">
          <p>• I am currently in my final year of pursuing a Bachelor's Degree in <span className="text-purple-400 font-semibold">Computer Science and Engineering</span> from Lovely Professional University. My journey has been driven by a deep interest in technology and building real-world solutions.</p>

          <p>• I’ve developed a strong foundation in core technologies like <span className="text-purple-400">Java, SQL, Data Structures, Web Development, Git & GitHub</span>. These skills empower me to design, develop, and maintain efficient and scalable applications.</p>

          <p>• I am passionate about <span className="text-purple-400">full-stack development</span>, with hands-on experience in both frontend and backend technologies. I enjoy crafting beautiful UIs as much as I love writing clean backend logic and database queries.</p>

          <p>• I believe in the power of <span className="text-purple-400">continuous learning and self-growth</span>. I constantly seek new challenges and opportunities to improve my skills, explore emerging tech, and contribute to impactful projects.</p>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
