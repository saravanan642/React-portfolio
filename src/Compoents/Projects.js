import React from "react";
import hotelImg from "../Assests/b73384d7-b6f9-4f66-89e7-9442bda24545.png";

const Projects = () => {

  const projectData = [
    {
      title: "Model HTML CSS",
      desc: "Model Malabar is a responsive fashion website built using HTML and CSS. It showcases modern collections with a clean layout and user-friendly design.",
      tech: ["HTML", "CSS"],
      live: "#",
      github: "https://github.com/saravanan642/Malabar-gold",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "VillageRetail-Sales",
      desc: "Village Retail Sales is a frontend web application built using HTML, CSS, and JavaScript. It helps manage products and sales records through a simple and user-friendly interface.",
      tech: ["React", "Tailwind"],
      live: "https://village-retail-sales.vercel.app/",
      github: "https://github.com/saravanan642/VillageRetail-Sales",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Hotel Booking in Kerala",
      desc: "Hotel Booking in Kerala is a frontend web application developed using HTML, CSS, and JavaScript. It enables users to browse hotel listings and simulate bookings through a responsive interface.",
      tech: ["React", "Tailwind"],
      live: "https://hotel-react-lac.vercel.app/",
      github: "https://github.com/saravanan642/Hotel-React",
      image: hotelImg   // ✅ Correct usage
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br 
    from-[#0f0c29] via-[#1a0033] to-[#24243e] 
    text-white px-6 md:px-20 py-24">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r 
          from-pink-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-gray-400 mt-4">
            A showcase of my recent frontend and full stack projects.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl 
              border border-white/10 
              rounded-3xl overflow-hidden 
              hover:scale-105 hover:shadow-pink-500/20 
              transition duration-500"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6 space-y-4">

                <h3 className="text-xl font-semibold text-pink-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full 
                      bg-gradient-to-r from-pink-500/20 to-purple-500/20 
                      border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-lg 
                    bg-pink-500 hover:bg-pink-600 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-lg 
                    border border-white/30 hover:bg-white/10 transition"
                  >
                    GitHub
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;