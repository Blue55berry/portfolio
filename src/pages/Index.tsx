import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex overflow-x-hidden">
      <Navigation />

      <main className="flex-1 min-w-0 min-h-screen ml-0 md:ml-10 lg:ml-12 transition-all duration-500 flex flex-col">
        <section
          className={`flex-1 flex items-center justify-center transition-all duration-700 ease-out`}
        >
          <Hero />
        </section>
      </main>

      <div className="fixed top-3 md:top-6 left-5 tracking-wide md:right-6 text-gray-600 font-light md:text-4xl  text-xl z-50 libre-baskerville-regular">
        Portfolio
      </div>
    </div>
  );
};

export default Index;
