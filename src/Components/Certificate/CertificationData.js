// const certifications = [
//   {
//     id: 1,
//     name: "Cloud Computing",
//     date: "December 2024",
//     description: "Completed a certification in Cloud Computing, covering cloud architecture, AWS services, virtualization, and deployment strategies."
//   },
//   {
//     id: 2,
//     name: "Complete Interview Preparation",
//     date: "July 2024",
//     description: "Completed an extensive interview preparation course, focusing on DSA, system design, and problem-solving strategies for tech interviews."
//   },
//   {
//     id: 3,
//     name: "Full-Stack Web Development",
//     date: "July 2024",
//     description: "Earned a certification in Full-Stack Web Development, mastering React.js, Node.js, Express, MongoDB, and backend API development."
//   }
// ];

// export default certifications;


import cloudComputingImg from "../../assets/Certificate1.jpg"; 
import nptelCertificate from "../../assets/nptel.png";
import serverSideCertificate from "../../assets/serverside.png";
import DSA from "../../assets/DSA.png";


const certifications = [
  {
    id: 1,
    name: "Cloud Computing",
    date: "October 2024",
    image: nptelCertificate,
    url: "https://example.com/cloud-computing-certificate",
    description: "Completed a certification in Cloud Computing, covering cloud architecture, AWS services, virtualization, and deployment strategies."
  },
  {
    id: 2,
    name: "Complete Interview Preparation",
    date: "July 2024",
    image: cloudComputingImg, // using same image for now
    url: "https://example.com/interview-preparation-certificate",
    description: "Completed an extensive interview preparation course, focusing on DSA, system design, and problem-solving strategies for tech interviews."
  },
  {
    id: 3,
  name: "Server-side JavaScript with Node.js",
  date: "April 2024",
  image: serverSideCertificate, // using same image for now
  url: "https://example.com/fullstack-certificate",  // Update with actual Coursera certificate link if available
  description: "Completed 'Server-side JavaScript with Node.js' gaining hands-on experience with building scalable backend applications using Node.js."

  },
   {
  id: 4,
  name: "Data Structure And Algorithm",
  date: "April 2024",
  image: DSA, // Update image variable if you have a specific one
  url: "https://example.com/data-structure-certificate",  // Replace with actual certificate link
description: "Completed course on Data Structures and Algorithms with hands-on problem-solving practice."
}

];

export default certifications;
