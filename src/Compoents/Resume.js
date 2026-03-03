import React from "react";
import Resume from "../Assests/Resume.jpg";
import { FaDownload } from "react-icons/fa";

const ResumePage = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex justify-center items-center  bg-gradient-to-r from-[#0a192f]/90 via-[#112240]/90 to-[#1b2a49]/90">

      {/* Download Icon */}
      <a
        href={Resume}
        download
        className="absolute top-6 right-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        <FaDownload size={20} />
      </a>

      {/* Resume Image */}
      <img
        src={Resume}
        alt="Resume"
        width={1000}
        className=" mt-28 mb-24"
      />

    </div>
  );
};

export default ResumePage;