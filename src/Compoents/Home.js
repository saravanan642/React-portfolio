import React from "react";
import profile from "../Assests/saravanan.png";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-gradient-to-br from-[#12002f] via-[#1f0036] to-[#0b1d5e]">

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-20  w-full max-w-6xl">

        {/* Left Content */}
        <div className="text-white font-serif max-w-3xl text-center md:text-left md:ml-[7%]">

          {/* Greeting */}
          <p className="text-lg md:text-2xl mb-4 animate-fadeIn">
            🖐🏻 Hi, I'm <span className="text-purple-400 font-semibold">Saravanan</span>
          </p>

          {/* Title */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <h1 className="text-3xl md:text-5xl font-bold animate-slideUp">
              Full Stack Developer
            </h1>
            <h1 className="text-purple-500 text-3xl md:text-5xl font-bold animate-slideUp delay-150">
              &
            </h1>
          </div>

          <h1 className="text-3xl md:text-5xl mt-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-slideUp delay-300">
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
            <button className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-800 transition duration-300 shadow-lg shadow-purple-600/40 hover:scale-105">
              Hire Me
            </button>

            <button className="px-6 py-2 rounded-full border border-purple-500 hover:bg-purple-500 hover:text-white transition duration-300 hover:scale-105">
              View Projects
            </button>
          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-30 rounded-full"></div>
            <img
              src={profile}
              alt="profile"
              className="relative w-60 md:w-60 lg:w-80 rounded-full  border-4 border-purple-500 shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
