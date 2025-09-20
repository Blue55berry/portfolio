import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Chat Application",
      description:
        "Real-time chat application with user authentication and message history",
      tech: ["React", "Tailwind CSS", "Express", "Websocket", "MongoDB"],
      image: "whasapp.png",
      // liveUrl: "#",
      githubUrl: "https://github.com/Blue55berry/web-chat.git",
    },
    {
      title: "Personal Finance Tracker",
      description:
        "Personal finance tracker with budgeting and expense categorization",
      tech: ["React", "Tailwind CSS", "Express", "MongoDB"],
      image: "finance.png",
      // liveUrl: "#",
      githubUrl: "https://github.com/Blue55berry/Finance-Tracker-System.git",
    },
    {
      title: "Smart Recipe Generator",
      description:
        "smart recipe generator that suggests recipes based on available ingredients",
      tech: ["React", "Tailwind CSS", "Express", "Themealdb API", "MongoDB"],
      image: "smart-recipe.png",
      // liveUrl: "#",
      githubUrl: "https://github.com/Blue55berry/Recipe-Generator.git",
    },
    {
      title: "Car Showroom Website",
      description:
        "Car showroom website with dynamic content and responsive design",
      tech: ["React", "Tailwind CSS", "Express"],
      image: "carshowroom.png",
      // liveUrl: "#",
      githubUrl: "https://github.com/Blue55berry/anime-drive-experience.git",
    },
    {
      title: "Task Assignment System",
      description:
        "Task assignment and management system with real-time updates",
      tech: ["Html", "Tailwind CSS", "Php", "Xampp Server", "PhpMyAdmin"],
      image: "Screenshot 2025-06-26 193729.png",
      // liveUrl: "#",
      githubUrl: "https://github.com/Blue55berry/Task-assignment",
    },
    {
      title: "Apple Store",
      description: "Apple Store product showcase with interactive features",
      tech: ["Html", "Tailwind CSS", "JavaScript", "AOS Library"],
      image: "./Screenshot 2025-06-26 200543.png",
      liveUrl: "https://blue55berry.github.io/apple-Store/",
      githubUrl: "https://github.com/Blue55berry/apple-Store",
    },
    {
      title: "Coffee Shop",
      description: "Coffee shop landing page with modern design",
      tech: ["Html", "Tailwind CSS", "3D model"],
      image: "./Screenshot 2025-06-26 200308.png",
      liveUrl: "https://blue55berry.github.io/Coffee-Shop/",
      githubUrl: "https://github.com/Blue55berry/Coffee-Shop",
    },
    {
      title: "Movie Booking System",
      description: "Movie booking system with real-time updates",
      tech: ["Html", "Tailwind CSS", "Php", "Xampp Server", "PhpMyAdmin"],
      image: "./Screenshot 2025-06-26 195411.png",
      // liveUrl: "#",
      githubUrl: "https://github.com/Blue55berry/Movie-Booking",
    },
  ];

  return (
    <div className="min-h-screen p-3 sm:p-4 md:p-6 lg:p-8 pt-12 sm:pt-14 md:pt-16 lg:pt-20 md:mt-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl mt-3 md:mt-0 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 transform hover:scale-105 transition-all duration-500">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 sm:gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-aos="fade-up"
              data-aos-duration="5000"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                    index === 0
                      ? "bg-gradient-to-t from-indigo-900/30 via-purple-900/20 to-transparent"
                      : index === 1
                      ? "bg-gradient-to-t from-pink-900/30 via-yellow-900/20 to-transparent"
                      : index === 2
                      ? "bg-gradient-to-t from-green-900/30 via-blue-900/20 to-transparent"
                      : "bg-gradient-to-t from-gray-900/30 via-slate-900/20 to-transparent"
                  }`}
                />
              </div>

              <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-700 text-xs sm:text-sm rounded-full hover:from-purple-100 hover:to-pink-100 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1 sm:gap-2 text-gray-800 hover:text-indigo-600 transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 sm:gap-2 text-gray-800 hover:text-indigo-600 transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
