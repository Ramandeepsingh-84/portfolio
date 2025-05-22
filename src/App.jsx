// import About from "./Components/About/About";
// import Experience from "./Components/Experience/Experience";
// import Home from "./Components/Home/Home";
// import Certifications from "./Components/Certificate/Certification";
// import Contact from "./Components/Contact/Contact";
// import Navbar from "./Components/Navbar/Navbar";
// import Projects from "./Components/Projects/Projects";
// import Footer from "./Components/Footer/Footer";
// import "./index.css";

// function App() {
//   return (
//     <div className="bg-[#171d32] h-auto w-full overflow-hidden">
//       <Navbar />
//       <Home />
//       <About />
//       <Experience />
//       <Certifications />
//       <Projects />
//       <Contact />
//       <Footer />
      
//     </div>
//   );
// }

// export default App;

import { Analytics } from "@vercel/analytics/react"
import React, { useRef, useEffect } from "react";
import AboutMe from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Home from "./Components/Home/Home";
import Certifications from "./Components/Certificate/Certification";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import CertificateModal from "./Components/Certificate/CertificateModal"; 
import Education from "./Components/Education/Education";
import "./index.css";

function App() {
  const modalRef = useRef();

  useEffect(() => {
    window.certificateModal = {
      showModal: (...args) => modalRef.current?.showModal(...args),
      closeModal: () => modalRef.current?.closeModal()
    };
  }, []);

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <Education />
      <AboutMe />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
      <CertificateModal ref={modalRef} /> 
      <Analytics />
    </div>
  );
}

export default App;

