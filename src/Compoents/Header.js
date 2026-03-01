import React, { useState } from "react";
import background from "../Assests/letter-s.png";
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 
    bg-gradient-to-r from-[#0a192f]/90 via-[#112240]/90 to-[#1b2a49]/90
    backdrop-blur-md border-b border-white/10">

      {/* Navbar */}
      <div className="flex items-center justify-between px-6 md:px-16 py-4 text-white font-serif">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src={background}
            alt="logo"
            className="w-10 h-10 rounded-full hover:scale-110 transition duration-300"
          />
          <h1 className="text-xl hover:text-cyan-300 md:text-2xl font-semibold tracking-wide">
            Saravanan
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide">

          {["HOME", "ABOUT", "PROJECTS", "SKILLS"].map((item) => (
            <a
              key={item}
              href="/"
              className="relative hover:text-cyan-300 transition duration-300 
              after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:w-0 after:h-[2px] after:bg-cyan-300 
              after:transition-all after:duration-300 
              hover:after:w-full"
            >
              {item}
            </a>
          ))}

          <a
            href="/"
            className="px-4 py-1.5 rounded-full bg-cyan-600 hover:bg-cyan-700 transition duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div
          className="text-3xl md:hidden cursor-pointer transition duration-300 hover:rotate-90"
          onClick={() => setOpen(!open)}
        >
          <TiThMenu />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#0a192f]/95 backdrop-blur-md`}
      >
        <div className="flex flex-col items-center gap-6 py-6 text-white">

          {["HOME", "ABOUT", "PROJECTS", "SKILLS"].map((item) => (
            <a
              key={item}
              href="/"
              onClick={() => setOpen(false)}
              className="hover:text-cyan-300 transition duration-300 text-sm tracking-wide"
            >
              {item}
            </a>
          ))}

          <a
            href="/"
            onClick={() => setOpen(false)}
            className="bg-cyan-600 px-6 py-2 rounded-full hover:bg-cyan-700 transition duration-300"
          >
            Contact
          </a>

        </div>
      </div>
    </header>
  );
};

export default Header;