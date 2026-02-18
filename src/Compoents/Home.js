import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-gradient-to-br from-[#12002f] via-[#1f0036] to-[#0b1d5e]">

      <div className="text-white font-serif max-w-3xl">

        {/* Greeting */}
        <p className="text-lg md:text-xl mb-4 animate-fadeIn">
          🖐🏻 Hi, I'm <span className="text-purple-400 font-semibold">Saravanan</span>
        </p>

        {/* Title */}
        <div className="flex flex-wrap items-center gap-3">
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
            As a Full Stack Developer, I build responsive, scalable and
          </p>
          <p>
            user-friendly web applications using modern
          </p>
          <p>
            technologies like React, Node.js and MongoDB.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 animate-fadeIn delay-700">
          <button className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-800 transition duration-300 shadow-lg shadow-purple-600/40">
            Hire Me
          </button>

          <button className="px-6 py-2 rounded-full border border-purple-500 hover:bg-purple-500 hover:text-white transition duration-300">
            View Projects
          </button>
        </div>

      </div>
    </section>
  );
};

export default Home;
