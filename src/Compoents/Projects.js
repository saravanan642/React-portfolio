import React from "react";

const Projects = () => {

  const projectData = [
    {
      title: "Model HTML CSS",
      desc: "Model Malabar is a responsive fashion website built using HTML and CSS with a clean and elegant layout.",
      tech: ["HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80", // Gold Fashion
      live: "#",
      github: "#"
    },
    {
      title: "Village Retail Sales",
      desc: "Village Retail Sales is a frontend web application to manage products and sales with a simple interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80", // Vehicles
      live: "#",
      github: "#"
    },
    {
      title: "Hotel Booking in Kerala",
      desc: "A frontend hotel booking website that allows users to explore Kerala resorts and simulate bookings.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", // Kerala Nature
      live: "#",
      github: "#"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br 
    from-[#0f0c29] via-[#1a0033] to-[#24243e] 
    text-white px-6 md:px-20 py-24">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-16 
        bg-gradient-to-r from-pink-400 to-purple-400 
        bg-clip-text text-transparent">
          My Projects
        </h1>

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

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.live}
                    className="px-4 py-2 text-sm rounded-lg 
                    bg-pink-500 hover:bg-pink-600 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
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
