import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br 
    from-[#0f1f3d] via-[#0b2a4a] to-[#0a1c33] 
    text-white pt-20 pb-10 px-6 md:px-20 overflow-hidden">

      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] 
      bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>

      {/* Soft Glow Effects */}
      <div className="absolute bottom-0 left-0 w-72 h-72 
      bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute top-0 right-0 w-72 h-72 
      bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-16">

        {/* Brand Section */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-cyan-400">
            Saravanan
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm">
            Passionate Frontend Developer focused on building
            scalable, responsive and user-friendly web applications
            using modern technologies.
          </p>

          {/* Social Buttons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="px-4 py-2 text-sm 
            bg-white/5 border border-white/10 rounded-lg 
            hover:bg-cyan-500/20 hover:border-cyan-400/40 
            transition duration-300">
              LinkedIn
            </a>

            <a href="#" className="px-4 py-2 text-sm 
            bg-white/5 border border-white/10 rounded-lg 
            hover:bg-cyan-500/20 hover:border-cyan-400/40 
            transition duration-300">
              GitHub
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-300 mb-6">
            Navigation
          </h3>

          <ul className="space-y-4 text-gray-400 text-sm">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item} className="hover:text-cyan-400 transition cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-300 mb-6">
            Contact Info
          </h3>

          <p className="text-gray-400 text-sm mb-3">
            📧 saravanansenthil605@gmail.com
          </p>

          <p className="text-gray-400 text-sm">
            📍 Tamil Nadu, India
          </p>

          <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-400">
            Open to internships, freelance projects, and full-time opportunities.
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Saravanan. Built with React & Tailwind CSS.
      </div>

    </footer>
  );
};

export default Footer;