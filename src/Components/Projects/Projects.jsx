import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Blogging Website"
          main="This is a blogging website created in Next.js using some component libraries."
          demoLink={null}
          sourceCodeLink={null}
        />
        <ProjectCard
          title="YouTube Clone"
          main="A YouTube clone built using React and Tailwind CSS."
          demoLink={null}  // No live preview available
          // sourceCodeLink="https://github.com/user/youtube-clone"
          sourceCodeLink={null}
        />
        <ProjectCard
          title="Netflix Clone"
          main="A Netflix UI clone with movie API integration."
          // demoLink="https://netflix-clone-demo.com"
          demoLink={null}
          sourceCodeLink={null}  // No source code available
        />
      </div>
    </div>
  );
};

export default Projects;
