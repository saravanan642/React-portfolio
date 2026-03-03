import React from "react";
import profile from "../Assests/saravanan.png";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center px-6 md:px-20 
    bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#1b2a49] ">

        <div className="flex  flex-col-reverse md:flex-row items-center  gap-40  w-full max-w-6xl">

          {/* Left Content */}
          <div className="text-white font-serif max-w-3xl text-center md:text-left md:ml-[%]">

            {/* Greeting */}
            <p className="text-lg md:text-2xl mb-4 animate-fadeIn">
              🖐🏻 Hi, I'm <span className="text-cyan-400 font-semibold">Saravanan</span>
            </p>

            {/* Title */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <h1 className="text-3xl md:text-5xl font-bold animate-slideUp">
                Full Stack Developer
              </h1>
              <h1 className="text-cyan-400 text-3xl md:text-5xl font-bold animate-slideUp delay-150">
                &
              </h1>
            </div>

            <h1 className="text-3xl md:text-5xl mt-2 font-bold text-transparent 
          bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 
          animate-slideUp delay-300">
              Frontend Specialist.
            </h1>

            {/* Description */}
            <div className="mt-6 tracking-wide text-sm md:text-base leading-relaxed text-gray-300 animate-fadeIn delay-500">
              <p>
                I build responsive, modern and user-friendly web applications using
              </p>
              <p>
                HTML, CSS, JavaScript and React.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex justify-center md:justify-start gap-4 animate-fadeIn delay-700">
              <a className="px-6 py-2 rounded-full bg-cyan-600 hover:bg-cyan-700 transition duration-300 shadow-lg shadow-cyan-600/40 hover:scale-105">
                Hire Me
              </a>

              <a  href="/projects" className="px-6 py-2 rounded-full border border-cyan-400 hover:bg-cyan-500 hover:text-white transition duration-300 hover:scale-105 ">
                View Projects
              </a >
            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-30 rounded-full"></div>
              <img
                src={profile}
                alt="profile"
                className="relative w-60 md:w-60 lg:w-80 rounded-full border-4 border-cyan-400 shadow-2xl"
              />
            </div>
          </div>

        </div>

      </section>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;