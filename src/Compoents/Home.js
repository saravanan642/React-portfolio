import React from "react";
import { Link } from "react-router-dom";
import profile from "../Assests/saravanan.png";
import Upto from "./Upto";


const Home = () => {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center px-6 md:px-20 
      bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#1b2a49]">

        <div className="flex flex-col-reverse md:flex-row items-center gap-40 w-full max-w-6xl">

          <div className="text-white font-serif max-w-3xl text-center md:text-left">

            <p className="text-lg md:text-2xl mb-4">
              🖐🏻 Hi, I'm <span className="text-cyan-400 font-semibold">Saravanan</span>
            </p>

            <h1 className="text-3xl md:text-5xl font-bold">
              Full Stack Developer
            </h1>

            <h1 className="text-3xl md:text-5xl mt-2 font-bold text-transparent 
            bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Frontend Specialist.
            </h1>

            <div className="mt-6 text-gray-300">
              <p>I build responsive, modern and user-friendly web applications using</p>
              <p>HTML, CSS, JavaScript and React.</p>
            </div>

            <div className="mt-8 flex justify-center md:justify-start gap-4">

              {/* Hire Button */}
              <Link
                to="/resume"
                className="px-6 py-2 rounded-full bg-cyan-600 hover:bg-cyan-700 transition duration-300 shadow-lg shadow-cyan-600/40 hover:scale-105"
              >
                Hire Me
              </Link>

              <a
                href="#projects"
                className="px-6 py-2 rounded-full border border-cyan-400 hover:bg-cyan-500 hover:text-white transition duration-300 hover:scale-105"
              >
                View Projects
              </a>

            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={profile}
              alt="profile"
              className="w-60 md:w-60 lg:w-80 rounded-full border-4 border-cyan-400 shadow-2xl"
            />
          </div>

        </div>
      </section>
      <Upto />

    </div>
  );
};

export default Home;