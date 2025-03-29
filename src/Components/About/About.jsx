import React from "react";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-10">
          {/* Circle animation removed */}

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
