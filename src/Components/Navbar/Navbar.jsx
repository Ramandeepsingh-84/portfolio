import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <li className="text-md transition-all duration-300 p-1 md:p-0 cursor-pointer">
          <Link to="About" smooth={true} duration={500}>About</Link>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0 cursor-pointer">
          <Link to="Experience" smooth={true} duration={500}>Skills</Link>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0 cursor-pointer">
          <Link to="Certifications" smooth={true} duration={500}>Certificates</Link>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0 cursor-pointer">
          <Link to="Projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0 cursor-pointer">
          <Link to="Contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(false);
            setShowmenu(true);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
