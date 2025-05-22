// import React from "react";
// import avatarImg from "../../assets/MyPhoto1.png";
// import TextChange from "../TextChange";
// import resumeFile from "../../assets/MyResume.pdf";
// import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
// import { AiOutlineDownload } from "react-icons/ai";

// const Home = () => {
//   return (
//     <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
//       <div className="md:w-2/4 md:pt-10">
//         <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
//           <TextChange />
//         </h1>
//         <p className="text-sm md:text-2xl tracking-tight">
//         I am a passionate Full Stack Developer focused on building responsive, user-friendly, and scalable web applications with seamless front-end and back-end integration.
// </p>
        
//         <div className="flex items-center gap-4 mt-5">
//           {/* Resume Button */}
//           <a
//           href={resumeFile} // Imported file
//           download="Ramandeep_Singh_Resume.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 text-white py-2 px-4 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
//             >
//           <AiOutlineDownload size={20} /> Resume
//           </a>

//           {/* Social Links */}
//           <a href="https://www.linkedin.com/in/ramandeep-singh-2a4304252/" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin size={28} className="hover:opacity-85 duration-300" />
//           </a>
//           <a href="https://github.com/Ramandeepsingh-84" target="_blank" rel="noopener noreferrer">
//             <FaGithub size={28} className="hover:opacity-85 duration-300" />
//           </a>
//           <a href="https://leetcode.com/u/t1ABLSUWUG/" target="_blank" rel="noopener noreferrer">
//             <FaCode size={28} className="hover:opacity-85 duration-300" />
//           </a>
//         </div>
//       </div>

//       <div>
    
        
//         <img className=" object-cover rounded-full" src={avatarImg} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Home;





// import React from "react";
// import avatarImg from "../../assets/MyPhoto1.png";
// import TextChange from "../TextChange";
// import resumeFile from "../../assets/MyResume.pdf";
// import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
// import { AiOutlineDownload } from "react-icons/ai";

// const Home = () => {
//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex justify-between items-start p-6 md:p-16 font-sans backdrop-blur-xl">
//       <div className="md:w-2/4 md:pt-10">
//         <h1 className="text-xl md:text-6xl font-extrabold leading-normal tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg">
//           <TextChange />
//         </h1>

//         <p className="text-sm md:text-2xl tracking-tight mt-4 bg-white/5 p-4 rounded-xl shadow-inner text-violet-300">
//           I am  <span className="text-pink-400 font-semibold">3rd Year Student</span> focused on building responsive, user-friendly, and scalable web applications with seamless front-end and back-end integration.
//         </p>

//         <div className="flex items-center gap-5 mt-6">
//           {/* Resume Button */}
//           <a
//             href={resumeFile}
//             download="Ramandeep_Singh_Resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-white py-2 px-4 text-sm md:text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 hover:opacity-90 transition duration-300 shadow-lg"
//           >
//             <AiOutlineDownload size={20} /> Resume
//           </a>

//           {/* Social Links */}
//           <a
//             href="https://www.linkedin.com/in/ramandeep-singh-2a4304252/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:scale-110 transition-transform duration-300 text-blue-400"
//           >
//             <FaLinkedin size={28} />
//           </a>
//           <a
//             href="https://github.com/Ramandeepsingh-84"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:scale-110 transition-transform duration-300 text-gray-300"
//           >
//             <FaGithub size={28} />
//           </a>
//           <a
//             href="https://leetcode.com/u/t1ABLSUWUG/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:scale-110 transition-transform duration-300 text-yellow-400"
//           >
//             <FaCode size={28} />
//           </a>
//         </div>
//       </div>

//       <div>
//         <img
//           className="object-cover rounded-full border-4 border-purple-600 shadow-lg"
//           src={avatarImg}
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import avatarImg from "../../assets/MyPhoto1.png";
import TextChange from "../TextChange";
import resumeFile from "../../assets/MyResume.pdf";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col-reverse md:flex-row justify-center items-center gap-10 p-6 md:p-16 font-sans backdrop-blur-xl">
      
      {/* Left Content */}
      <div className="w-full md:w-2/4 md:pt-10 text-center md:text-left">
        <h1 className="text-xl md:text-6xl font-extrabold leading-normal tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg">
          <TextChange />
        </h1>

        <p className="text-sm md:text-2xl tracking-tight mt-4 bg-white/5 p-4 rounded-xl shadow-inner text-violet-300">
          I am <span className="text-pink-400 font-semibold">3rd Year Student</span> focused on building responsive, user-friendly, and scalable web applications with seamless front-end and back-end integration.
        </p>

        <div className="flex justify-center md:justify-start items-center gap-5 mt-6 flex-wrap">
          {/* Resume Button */}
          <a
            href={resumeFile}
            download="Ramandeep_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white py-2 px-4 text-sm md:text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 hover:opacity-90 transition duration-300 shadow-lg"
          >
            <AiOutlineDownload size={20} /> Resume
          </a>

          {/* Social Links */}
          <a
            href="https://www.linkedin.com/in/ramandeep-singh-2a4304252/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300 text-blue-400"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/Ramandeepsingh-84"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300 text-gray-300"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://leetcode.com/u/t1ABLSUWUG/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300 text-yellow-400"
          >
            <FaCode size={28} />
          </a>
        </div>
      </div>

      {/* Avatar Image */}
      <div className="w-48 md:w-72">
        <img
          className="object-cover rounded-full border-4 border-purple-600 shadow-lg w-full h-auto"
          src={avatarImg}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Home;
