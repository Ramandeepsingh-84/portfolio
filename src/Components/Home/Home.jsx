import React from "react";
import avatarImg from "../../assets/MyPhoto1.png";
import TextChange from "../TextChange";
import resumeFile from "../../assets/MyResume.pdf";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
        I am a passionate Full Stack Developer focused on building responsive, user-friendly, and scalable web applications with seamless front-end and back-end integration.
</p>
        
        <div className="flex items-center gap-4 mt-5">
          {/* Resume Button */}
          <a
          href={resumeFile} // Imported file
          download="Ramandeep_Singh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white py-2 px-4 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
            >
          <AiOutlineDownload size={20} /> Resume
          </a>

          {/* Social Links */}
          <a href="https://www.linkedin.com/in/ramandeep-singh-2a4304252/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} className="hover:opacity-85 duration-300" />
          </a>
          <a href="https://github.com/Ramandeepsingh-84" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} className="hover:opacity-85 duration-300" />
          </a>
          <a href="https://leetcode.com/u/t1ABLSUWUG/" target="_blank" rel="noopener noreferrer">
            <FaCode size={28} className="hover:opacity-85 duration-300" />
          </a>
        </div>
      </div>

      <div>
    
        
        <img className=" object-cover rounded-full" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
