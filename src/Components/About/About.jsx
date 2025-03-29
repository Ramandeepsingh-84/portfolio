import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-10">
          {/* Unique Circular Animation */}
          <motion.div
            className="relative w-40 h-40 md:w-60 md:h-60 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute w-full h-full border-4 border-blue-500 rounded-full animate-pulse"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            ></motion.div>
            <motion.div
              className="absolute w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>
            <motion.div
              className="absolute w-20 h-20 md:w-28 md:h-28 bg-white bg-opacity-20 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>
          </motion.div>

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I specialize in creating visually appealing and highly responsive websites. I love turning ideas into reality with seamless UI/UX.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend & Database Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I have experience in building secure and scalable backend systems, focusing on optimizing database performance and designing efficient APIs.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Passionate Coder & Problem Solver
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I enjoy solving problems and continuously improving my skills. Currently, I'm working on projects involving full-stack development, cloud computing, and automation.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;