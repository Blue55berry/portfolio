import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Linkedin, Github, Download, Instagram, Mail } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const handleViewResume = () => {
    window.open("/pdf/Abi Resume.pdf", "_blank");
  };

  const handleDownloadResume = () => {
    // Start the resume PDF download
    const link = document.createElement("a");
    link.href = "/pdf/Abi Resume.pdf"; // Ensure this path is correct
    link.download = "Abi Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navigationItems = [
    { id: "/", label: "Home", rotation: -90 },
    { id: "/about", label: "About", rotation: -90 },
    { id: "/skills", label: "Skills", rotation: -90 },
    { id: "/projects", label: "Projects", rotation: -90 },
    { id: "/education", label: "Education", rotation: -90 },
  ];

  const [showSidebar, setShowSidebar] = React.useState(false);
  // Detect if device is small (mobile/tablet)
  const isSmallDevice =
    typeof window !== "undefined" && window.innerWidth < 1024;

  React.useEffect(() => {
    const handleResize = () => {
      // On resize, update sidebar visibility for large devices
      if (window.innerWidth >= 1024) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };
    window.addEventListener("resize", handleResize);
    // Set initial state
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Logo Button - only on small devices */}
      <button
        className="fixed right-1 md:right-2 top-2  z-50 text-sm md:text-lg lg:text-xl font-bold  rounded-full bg-purple-300 text-gray-400 p-2 transition-all  duration-300"
        onClick={() => {
          if (isSmallDevice) {
            setShowSidebar((prev) => !prev);
          }
        }}
      >
        AP
      </button>

      {/* Sidebar - always visible on large devices, toggled on small devices */}
      <div
        className={`
          fixed right-0 top-0 h-full w-10 md:w-14 lg:w-14 bg-white-600  backdrop-blur-sm shadow-lg flex flex-col items-center justify-between py-3 md:py-6 z-40
          transition-transform duration-500
          ${showSidebar ? "translate-x-0" : "translate-x-full"}
          ${isSmallDevice ? "" : "!translate-x-0"}
        `}
        style={{
          pointerEvents: showSidebar || !isSmallDevice ? "auto" : "none",
        }}
      >
        {/* Navigation Items */}
        <div className="flex flex-col gap-8 flex-1 justify-center items-center p-4 mt-4">
          {navigationItems.map((item) => (
            <Link
              to={item.id}
              key={item.id}
              className={`text-xs md:text-sm font-medium transition-all py-2 duration-300 hover:scale-110 flex items-center gap-1 ${
                location.pathname === item.id
                  ? "text-gray-800"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              style={{ transform: `rotate(${item.rotation}deg)` }}
            >
              {item.label}
            </Link>
          ))}
          <div
            className={`text-xs md:text-sm font-medium transition-all py-3 duration-300 hover:scale-110 flex items-center gap-1 text-gray-400 hover:text-gray-600 cursor-pointer`}
            style={{ transform: `rotate(-90deg)` }}
          >
            <Download className="w-3 h-3 md:w-4 md:h-4" />
            View Resume
          </div>
          <div
            onClick={handleDownloadResume}
            className={`text-xs md:text-sm  mt-6 lg:mt-3 font-medium transition-all duration-300 hover:scale-110 flex items-center gap-1 text-gray-400 hover:text-gray-600 cursor-pointer`}
            style={{ transform: `rotate(-90deg)` }}
          >
            <Download className="w-3 h-3 md:w-4 md:h-4" />
            Download Resume
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-2 md:gap-3 mt-3">
          <a
            href="https://www.linkedin.com/in/abi-prasath-554a4727b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-3 h-3 md:w-5 md:h-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-all duration-300 hover:scale-110" />
          </a>
          <a
            href="https://github.com/Blue55berry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-3 h-3 md:w-5 md:h-5 text-gray-400 hover:text-gray-800 cursor-pointer transition-all duration-300 hover:scale-110" />
          </a>
          <a
            href="https://www.instagram.com/_un_lucky_55/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="w-3 h-3 md:w-5 md:h-5 text-gray-400 hover:text-[#E4405F] cursor-pointer transition-all duration-300 hover:scale-110" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abiprasath6@gmail.com"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-3 h-3 md:w-5 md:h-5 text-gray-400 hover:text-red-600 cursor-pointer transition-all duration-300 hover:scale-110" />
          </a>
          {/* Vertical Line */}
          <div className="w-px h-3 md:h-12 lg:h-16 bg-gray-500 mx-auto mt-2"></div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
