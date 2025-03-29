import React from "react";
import Swal from "sweetalert2";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";

const ProjectCard = ({ title, main, demoLink, sourceCodeLink }) => {
  // Function to show alert
  const showAlert = () => {
    Swal.fire({
      icon: "info",
      title: "Development Mode",
      text: "This project is still in development mode.",
      confirmButtonColor: "#465697",
    });
  };

  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4" src={bannerImg} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        {demoLink ? (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="md:mt-10 text-white py-1 px-2 text-xs md:text-sm md:py-1 md:px-3 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Live Preview
          </a>
        ) : (
          <button
            onClick={showAlert}
            className="md:mt-10 text-white py-1 px-2 text-xs md:text-sm md:py-1 md:px-3 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-gray-600"
          >
            Live Preview
          </button>
        )}

        {sourceCodeLink ? (
          <a
            href={sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="md:mt-10 text-white py-1 px-2 text-xs md:text-sm md:py-1 md:px-3 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Source Code
          </a>
        ) : (
          <button
            onClick={showAlert}
            className="md:mt-10 text-white py-1 px-2 text-xs md:text-sm md:py-1 md:px-3 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-gray-600"
          >
            Source Code
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
