import React from "react";
import Skills from "./Skills";
import Educations from "./Educations";

const About = () => {
  // Scroll to section by id
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
      {/* Navigation */}
      <div className="fixed bottom-3 md:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 sm:gap-6 md:gap-12 lg:gap-16 z-50">
        <button
          className="text-xs sm:text-sm md:text-lg lg:text-xl font-light text-gray-900 border-b-2 border-gray-900 focus:outline-none"
          onClick={() => scrollToSection("about")}
          type="button"
        >
          About
        </button>

        
        {/* <button
          className="text-xs sm:text-sm md:text-lg lg:text-xl font-light text-gray-500 hover:text-gray-900 transition-colors border-b-2 border-transparent hover:border-gray-900 focus:outline-none"
          onClick={() => scrollToSection("education")}
          type="button"
        >
          Education
        </button>
        <button
          className="text-xs sm:text-sm md:text-lg lg:text-xl font-light text-gray-500 hover:text-gray-900 transition-colors border-b-2 border-transparent hover:border-gray-900 focus:outline-none"
          onClick={() => scrollToSection("skills")}
          type="button"
        >
          My Skills
        </button> */}
      </div>

      {/* About Section */}
      <div id="about" className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center mt-16">
        {/* Text Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black text-white p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 rounded-lg order-2 lg:order-1 transform hover:scale-105 transition-all duration-500">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight libre-baskerville-regular">
            Hi,
            <br />
            I'm <span className="text-blue-400 sacramento-regular tracking-wider"> Abi!</span>
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sacramento-regular">
            I'm a Full Stack Developer passionate about building robust and user-friendly web applications. I focus on writing clean, maintainable code and optimizing performance across the stack—from front-end interfaces to back-end logic.
          </p>
        </div>

        {/* Avatar Section */}
        <div className="relative bg-white/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 rounded-lg order-1 lg:order-2 transform hover:scale-105 transition-all duration-500">
          <div className="text-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 rounded-lg mb-3 sm:mb-4 md:mb-6 lg:mb-8 flex items-center justify-center transform hover:rotate-2 transition-all duration-500 shadow-lg">
              <img
                src="/peeps-avatar-alpha.png"
                alt="Abi's Avatar"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 xl:w-72 xl:h-72 object-cover rounded-full border-4 border-white shadow"
              />
            </div>
            {/* Yin Yang in bottom right of avatar card */}
            <div className="absolute bottom-4 right-4 hover:cursor-pointer">
              <div className="w-8 h-8 sm:w-10 sm:h-12  md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full bg-black relative transform hover:rotate-180 transition-all duration-700 shadow-lg">
                <div className="absolute top-0 right-0 w-4 h-8 sm:w-5 sm:h-10 md:w-6 md:h-12 lg:w-8 lg:h-16 xl:w-10 xl:h-20 bg-purple-300 rounded-r-full"></div>
                <div className="absolute top-1 left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2 md:h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 bg-black rounded-full"></div>
                <div className="absolute bottom-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2 md:h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
