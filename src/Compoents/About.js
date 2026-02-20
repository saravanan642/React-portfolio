import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br 
    from-[#1a002e] via-[#22003c] to-[#14001f] 
    text-white px-6 md:px-20 py-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          {/* Heading */}
          <div className="relative">
            <h1 className="text-5xl font-bold text-pink-400">
              About Me
            </h1>
            <span className="absolute -left-6 top-2 h-12 w-1 
            bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"></span>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">

            <p>
              Hello, I’m <span className="text-white font-semibold">Saravanan</span>, 
              a creative <span className="text-pink-400 font-semibold">Frontend Developer</span> 
              passionate about crafting immersive web experiences.
            </p>

            <p>
              I build responsive and dynamic interfaces using 
              HTML, CSS, JavaScript, React, and Tailwind CSS 
              with a strong focus on performance and usability.
            </p>

            <p>
              My goal is to create visually engaging and scalable 
              web applications while continuously evolving 
              with modern frontend technologies.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE SKILLS */}
        <div className="grid grid-cols-2 gap-8">

          {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"].map((skill, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-2xl 
              bg-gradient-to-br from-[#2d004d] to-[#3a0066] 
              border border-purple-500/20 
              shadow-lg transition duration-300 
              hover:-translate-y-2 hover:shadow-pink-500/30 cursor-pointer"
            >
              {/* Neon Glow Effect */}
              <div className="absolute inset-0 rounded-2xl 
              bg-gradient-to-r from-pink-500/10 to-purple-500/10 
              opacity-0 group-hover:opacity-100 transition duration-300 blur-md"></div>

              <h3 className="relative text-xl font-semibold text-center text-pink-300">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default About;