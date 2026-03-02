import React from "react";

const Footer = () => {
  return (
    <footer className="relative 
    bg-gradient-to-br from-[#0f1f3d] via-[#0b2a4a] to-[#0a1c33] 
    text-gray-300 px-6 md:px-20 py-16 overflow-hidden broder border-solid  border-[#95b1d5]  border-t">

      {/* Soft Background Glow */}
      <div className="absolute bottom-0 right-0 w-72 h-72 
      bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo / About */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Saravanan
            </h2>

            <p className="text-xl leading-relaxed text-gray-300 max-w-md">
              A passionate Frontend Developer dedicated to building
              modern, responsive, and scalable web applications.
              Focused on clean architecture and user-centered design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 uppercase tracking-wider mb-4">
              Navigation
            </h3>

            <ul className="space-y-3 text-lg">
              <div className="flex gap-8">
                <li className="hover:text-cyan-400 transition">Home</li>
                <li className="hover:text-cyan-400 transition">About</li>
                <li className="hover:text-cyan-400 transition">Projects</li>
              </div>
              <div className="flex gap-9 mt-2">
                <li className="hover:text-cyan-400 transition">Skills</li>
                <li className="hover:text-cyan-400 transition">Contact</li>
              </div>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 uppercase tracking-wider mb-4">
              Contact
            </h3>

            <p className="text-lg mb-2">
              saravanansenthil605@gmail.com
            </p>

            <p className="text-lg mb-4">
              Tamil Nadu, India
            </p>

            <div className="flex gap-4 text-lg">
              <a href="#" className="hover:text-cyan-400 transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                GitHub
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-[#4b5665] pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} Saravanan. All rights reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Built with React & Tailwind CSS.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;