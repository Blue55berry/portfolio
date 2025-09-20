import React from "react";
import BlurText from "./BlurText";
import TiltedCard from "./TiltedCard.jsx";
import { useIsMobile } from "../hooks/use-mobile";

const About = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
      {/* About Section */}
      <div
        id="about"
        className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center mt-16"
      >
        {/* Text Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black text-white p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 rounded-lg order-2 lg:order-1 transform hover:scale-105 transition-all duration-500">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight libre-baskerville-regular">
            Hi,
            <br />
            I'm{" "}
            <span className="text-blue-400 sacramento-regular tracking-wider">
              {" "}
              Abi!
            </span>
          </h1>
          <BlurText
            text="I'm a Full Stack Developer with a passion for building beautiful, functional, and user-centric web applications. I thrive on turning complex problems into elegant solutions and am always eager to learn new technologies. My goal is to create web experiences that are not only visually appealing but also highly performant and accessible."
            className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sacramento-regular"
          />
        </div>

        {/* Avatar Section */}
        <div className="relative bg-white/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 rounded-lg order-1 lg:order-2 transform hover:scale-105 transition-all duration-500">
          <div className="w-80 h-80 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 rounded-lg flex items-center justify-center transform hover:rotate-2 transition-all duration-500 shadow-lg p-4">
            {isMobile ? (
              <img
                src="/peeps-avatar-alpha.png"
                alt="Abi's Avatar"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <TiltedCard
                imageSrc="/peeps-avatar-alpha.png"
                altText="Abi's Avatar"
                captionText="Abi's Portfolio"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                showTooltip={true}
                displayOverlayContent={false}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
