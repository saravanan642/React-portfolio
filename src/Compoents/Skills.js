import React from "react";

const Skills = () => {

  const skillCategories = [
    {
      number: "01",
      title: "Frontend Development",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Responsive Design",
        "Accessibility Basics"
      ]
    },
    {
      number: "02",
      title: "Tools & Workflow",
      skills: [
        "Git & GitHub",
        "VS Code",
        "Chrome DevTools",
        "Basic API Integration"
      ]
    }
  ];

  return (
    <section className="relative min-h-screen 
    bg-gradient-to-br from-[#0f1f3d] via-[#0b2a4a] to-[#0a1c33] 
    text-white px-6 md:px-20 py-28 overflow-hidden">

      {/* Glow Effects (Same as About) */}
      <div className="absolute top-10 left-0 w-96 h-96 
      bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] 
      bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-20">

        {/* LEFT SIDE BIG TITLE */}
        <div className="md:col-span-1 space-y-6 mt-40">
          <h1 className="text-6xl font-bold leading-tight">
            My <span className="text-cyan-400">Skills</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            I focus on building clean, scalable, and high-performance 
            frontend applications with strong attention to usability 
            and modern development standards.
          </p>
        </div>

        {/* RIGHT SIDE SKILL BLOCKS */}
        <div className="md:col-span-2 space-y-16">

          {skillCategories.map((category, index) => (
            <div key={index} className="border-l-4 border-cyan-400 pl-8">

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-gray-600">
                  {category.number}
                </span>
                <h2 className="text-2xl font-semibold text-cyan-300">
                  {category.title}
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 
                    rounded-lg px-5 py-3 
                    hover:bg-cyan-500/10 
                    hover:border-cyan-400/40 
                    transition duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;