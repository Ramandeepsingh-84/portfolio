import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb, SiMysql, SiPostgresql, SiPhp, SiExpress, SiFirebase, SiCplusplus } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold text-center">Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {/* Frontend Skills */}
        <div className="p-6 bg-zinc-950 bg-opacity-60 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Frontend Development</h2>
          <div className="grid grid-cols-3 gap-4">
            <span className="p-3 bg-black flex justify-center rounded-xl"><FaHtml5 color="#E34F26" size={50} /></span>
            <span className="p-3 bg-black flex justify-center rounded-xl"><FaCss3 color="#1572B6" size={50} /></span>
            <span className="p-3 bg-black flex justify-center rounded-xl"><FaJs color="#F7DF1E" size={50} /></span>
            <span className="p-3 bg-black flex justify-center rounded-xl"><FaReact color="#61DAFB" size={50} /></span>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="p-6 bg-zinc-950 bg-opacity-60 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Backend Development</h2>
          <div className="grid grid-cols-3 gap-4">
            <span className="p-3 bg-black flex justify-center rounded-xl"><FaNodeJs color="#339933" size={50} /></span>
            <span className="p-3 bg-black flex justify-center rounded-xl"><SiPhp color="#777BB4" size={50} /></span>
            <span className="p-3 bg-black flex justify-center rounded-xl"><SiFirebase color="#FFCA28" size={50} /></span>
          </div>
        </div>

        {/* Database Skills */}
        <div className="p-6 bg-zinc-950 bg-opacity-60 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Databases</h2>
          <div className="grid grid-cols-3 gap-4">
            <span className="p-3 bg-black flex justify-center rounded-xl"><SiMongodb color="#47A248" size={50} /></span>
            <span className="p-3 bg-black flex justify-center rounded-xl"><SiMysql color="#4479A1" size={50} /></span>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="p-6 bg-zinc-950 bg-opacity-60 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Programming Languages</h2>
          <div className="grid grid-cols-2 gap-4">
            <span className="p-3 bg-black flex justify-center rounded-xl"><FaJava color="#007396" size={50} /></span>
            <span className="p-3 bg-black flex justify-center rounded-xl"><SiCplusplus color="#00599C" size={50} /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
