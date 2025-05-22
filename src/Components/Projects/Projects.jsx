import React from "react";
import ProjectCard from "./ProjectCard";
import vpmsImg from "../../assets/vpms.png";
import musicWebsiteImg from "../../assets/musicimg.png";
import ecommerceWebsiteImg from "../../assets/ecomm.png";


const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
      {/* <ProjectCard
        img={vpmsImg}
        title="Vehicle Parking Management System"
        main="Web-based system to manage vehicle parking efficiently."
        fullDescription="This Vehicle Parking Management System helps manage parking slots, register vehicles, track entry/exit times, and generate billing information. Built using PHP and MySQL, the system offers both user and admin panels. Admins can view total slots, live status, and generate reports. It is designed to streamline parking management and eliminate human error."
        demoLink={null}
        sourceCodeLink="https://github.com/Ramandeepsingh-84/vpms"
      /> */}
        <ProjectCard
        img={musicWebsiteImg}
        title="Music Website Clone"
        main="A visually appealing music website clone using HTML, CSS, and JavaScript."
        fullDescription="This Music Website Clone replicates the design and core functionality of a modern music streaming platform. It includes a responsive layout, interactive music controls, animated UI elements, and playlist features. Built purely with HTML, CSS, and JavaScript, it's designed to showcase front-end development skills with a focus on user experience."
        demoLink="https://streamingmusic.netlify.app/"
        sourceCodeLink="https://github.com/Ramandeepsingh-84/music_website?tab=readme-ov-file"
      />

        <ProjectCard
          img={ecommerceWebsiteImg}
          title="E-commerce Website"
          main="A fully functional e-commerce website built using React.js."
          fullDescription="This E-commerce Website is developed with React.js and provides a seamless shopping experience. It features a modern UI with product listings, detailed product pages, shopping cart functionality, and checkout flow. Designed with responsiveness and user engagement in mind, it’s an ideal demonstration of component-based development and state management in React."
          demoLink="https://reactjs-ecommerce-app.vercel.app/"  // Add demo link if available
          sourceCodeLink="https://github.com/Ramandeepsingh-84/ecommerce"  // Add GitHub link if available
        />

         <ProjectCard
        img={vpmsImg}
        title="Vehicle Parking Management System"
        main="Web-based system to manage vehicle parking efficiently."
        fullDescription="This Vehicle Parking Management System helps manage parking slots, register vehicles, track entry/exit times, and generate billing information. Built using PHP and MySQL, the system offers both user and admin panels. Admins can view total slots, live status, and generate reports. It is designed to streamline parking management and eliminate human error."
        demoLink={null}
        sourceCodeLink="https://github.com/Ramandeepsingh-84/vpms"
      />

      </div>
    </div>
  );
};

export default Projects;