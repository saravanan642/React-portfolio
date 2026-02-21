import React from "react";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "UI/UX Design",
  ];

  return (
    <section className="relative min-h-screen flex items-center 
    bg-gradient-to-br from-[#1a002e] via-[#22003c] to-[#14001f] 
    text-white px-6 md:px-20 py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-pink-600/20 blur-3xl rounded-full top-10 left-0"></div>
      <div className="absolute w-96 h-96 bg-purple-600/20 blur-3xl rounded-full bottom-0 right-0"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE CONTENT */}
        <div className="space-y-8">

          <div>
            <h1 className="text-5xl font-bold tracking-wide">
              <span className="border-l-4 border-pink-500 pl-4">
                About Me
              </span>
            </h1>
          </div>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">

            <p>
              Hello, I’m <span className="text-white font-semibold">Saravanan</span>, 
              a <span className="text-pink-400 font-semibold">Frontend Developer</span> 
              who enjoys building elegant and user-focused web interfaces.
            </p>

            <p>
              I create clean, responsive applications using modern frontend 
              technologies while maintaining performance and usability.
            </p>

            <p>
              I also focus on UI/UX principles to ensure intuitive and 
              engaging digital experiences.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE GLASS PANEL */}
        <div className="bg-white/5 backdrop-blur-2xl 
        border border-white/10 rounded-3xl 
        p-10 shadow-2xl">

          <h2 className="text-2xl font-semibold text-purple-300 mb-8">
            Core Skills
          </h2>

          <div className="flex flex-wrap gap-4">

            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-2 text-sm rounded-full 
                bg-gradient-to-r from-pink-500/20 to-purple-500/20 
                border border-pink-400/30 
                hover:scale-110 hover:border-pink-400 
                transition duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;