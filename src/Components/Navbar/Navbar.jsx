import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu when clicking on a nav item
  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "py-2 bg-gray-900 bg-opacity-95 shadow-lg" : "py-4 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] bg-opacity-90"}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <span className="text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-md">
          Portfolio
        </span>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {[
            { label: "Education", to: "Education" },
            { label: "About Me", to: "About" },
            { label: "Skills", to: "Experience" },
            { label: "Certificates", to: "Certifications" },
            { label: "Projects", to: "Projects" },
            { label: "Contact", to: "Contact" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className="text-purple-300 hover:text-pink-400 transition-colors duration-200 cursor-pointer text-sm font-medium"
                activeClass="text-pink-400 font-semibold"
                spy={true}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-pink-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <RiCloseLine size={28} className="transition-all duration-200" />
          ) : (
            <RiMenu2Line size={28} className="transition-all duration-200" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="bg-gray-900 bg-opacity-95 backdrop-blur-sm px-4 py-3">
          <ul className="flex flex-col space-y-3">
            {[
              { label: "Education", to: "Education" },
              { label: "About Me", to: "About" },
              { label: "Skills", to: "Experience" },
              { label: "Certificates", to: "Certifications" },
              { label: "Projects", to: "Projects" },
              { label: "Contact", to: "Contact" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={handleNavClick}
                  className="block py-2 px-3 text-purple-300 hover:text-pink-400 rounded-md transition-colors duration-200 cursor-pointer text-sm font-medium"
                  activeClass="bg-gray-800 text-pink-400"
                  spy={true}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;