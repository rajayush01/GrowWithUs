import React from "react";
import img from "../assets/images/bg1.jpg"; 

const HeroSection = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-black text-white"
      style={{
        backgroundImage: `url(${img})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay and Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="text-center z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Empower Your Business
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Unlock growth with innovative digital solutions.
        </p>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
