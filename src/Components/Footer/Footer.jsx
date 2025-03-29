import React, { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <p className="rights-text">© 2025 All Rights Reserved.</p>
      <div className="social-icons">
        <a href="https://instagram.com/raman._.sasan" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://facebook.com/profile.php?id=100069709311770" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
      </div>
      {showScroll && (
        <button className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
