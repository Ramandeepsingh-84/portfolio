import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Home from "./Components/Home/Home";
import Certifications from "./Components/Certificate/Certification";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
