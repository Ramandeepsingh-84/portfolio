import React from "react";
import ProjectCard from "./ProjectCard";
import vpmsImg from "../../assets/vpms.png";
import doctorAppointmentImg from "../../assets/doctor.png";
import musicWebsiteImg from "../../assets/musicimg.png";
import noteshub from "../../assets/noteshub.png";
import jobPortalImg from "../../assets/job.png";


const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-4 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

      {/* <div className="py-12 px-8 flex flex-wrap gap-9"> */}
      {/* <ProjectCard
        img={vpmsImg}
        title="Vehicle Parking Management System"
        main="Web-based system to manage vehicle parking efficiently."
        fullDescription="This Vehicle Parking Management System helps manage parking slots, register vehicles, track entry/exit times, and generate billing information. Built using PHP and MySQL, the system offers both user and admin panels. Admins can view total slots, live status, and generate reports. It is designed to streamline parking management and eliminate human error."
        demoLink={null}
        sourceCodeLink="https://github.com/Ramandeepsingh-84/vpms"
      /> */}
           <ProjectCard
          img={doctorAppointmentImg}
          title="MediServe"
          main="A full-stack Doctor Appointment System built with React.js, Tailwind CSS, Node.js, and MongoDB."
          fullDescription="MediServe is a comprehensive online doctor appointment booking system designed to simplify the healthcare consultation process. It features a responsive and intuitive user interface where patients can easily search for doctors, view available time slots, and book appointments. The system includes secure role-based authentication for both doctors and patients, real-time appointment tracking, and data management using MongoDB. This project showcases strong full-stack development capabilities with an emphasis on real-world usability and modern design."
          demoLink="https://doctorappointment-user.onrender.com/"
          sourceCodeLink="https://github.com/Ramandeepsingh-84/doctorappointment"
        />



        <ProjectCard
        img={jobPortalImg} // Replace with the correct image import or variable
        title="JobBridge"
        main="A modern Job Portal platform built using the MERN stack and latest web technologies."
        fullDescription="JobBridge is a full-featured job portal web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It connects job seekers with recruiters through an intuitive and responsive interface. Key features include job listings, company profiles, user authentication, resume uploads, application tracking, and real-time job filtering. Built with modern UI components and robust backend logic, this project demonstrates end-to-end web development with a focus on usability and performance."
        demoLink="" // Replace this with the correct JobBridge demo link if available
        sourceCodeLink="https://github.com/Ramandeepsingh-84/jobBridge" // Replace this with the correct JobBridge repo link if available
      />


          <ProjectCard
        img={musicWebsiteImg}
        title="MusicHub"
        main="A visually appealing music website clone using HTML, CSS, and JavaScript."
        fullDescription="This Music Website Clone replicates the design and core functionality of a modern music streaming platform. It includes a responsive layout, interactive music controls, animated UI elements, and playlist features. Built purely with HTML, CSS, and JavaScript, it's designed to showcase front-end development skills with a focus on user experience."
        demoLink="https://streamingmusic.netlify.app/"
        sourceCodeLink="https://github.com/Ramandeepsingh-84/music_website?tab=readme-ov-file"
      />

              <ProjectCard
      img={noteshub} // Replace with the actual image variable or path
      title="NotesHub"
      main="A MERN-based note-taking web application designed for productivity and simplicity."
      fullDescription="NotesHub is a full-stack note-taking platform developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to create, edit, delete, and organize personal notes in a secure and user-friendly environment. Featuring user authentication, responsive design, and smooth CRUD operations, NotesHub is built to help users manage their daily tasks and thoughts efficiently. The project demonstrates seamless integration of front-end and back-end technologies, with a strong focus on usability and performance."
      demoLink="" // Replace with actual demo URL
      sourceCodeLink="https://github.com/Ramandeepsingh-84/notesHub" // Replace with actual repo link
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