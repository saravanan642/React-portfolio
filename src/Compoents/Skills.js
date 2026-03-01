import React from "react";

const Skills = () => {

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Chrome DevTools"]
    },
    {
      title: "UI / UX Knowledge",
      skills: ["Responsive Design", "Wireframing Basics", "Layout Hierarchy", "Accessibility Principles"]
    }
  ];

  return (
    <section className="min-h-screen 
    bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] 
    text-white px-6 md:px-20 py-28">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-teal-300">
            Technical Skills
          </h1>
          <p className="text-gray-300 mt-4 text-lg">
            Frontend development expertise with strong UI focus.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-12">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg 
              border border-white/20 
              rounded-2xl p-8 shadow-lg 
              hover:shadow-teal-400/30 
              transition duration-500"
            >

              <h2 className="text-xl font-semibold text-teal-300 mb-6">
                {category.title}
              </h2>

              <ul className="space-y-3 text-gray-200">

                {category.skills.map((skill, i) => (
                  <li 
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mt-24 text-center text-gray-300 max-w-3xl mx-auto">
          I build scalable and maintainable frontend applications 
          with clean architecture and strong attention to user experience.
        </div>

      </div>
    </section>
  );
};

export default Skills;