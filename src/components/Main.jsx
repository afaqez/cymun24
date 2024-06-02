// src/components/Main.jsx
import React from "react";
import backgroundImage from "../assets/images/cloudyBackground.png";
import Navbar from "./Navbar";
import { Timer } from "./Timer";
import ExecutiveCouncil from "./ExecutiveCouncil";
import Stats from "./Stats"; // Import the StatsComponent
import TeamSection from "./TeamSection";

const Main = () => {
  return (
    <div>
      {/* First Section/Page */}
      <div className="bg-cover bg-center min-h-screen flex flex-col justify-between">
        <Navbar />

        <div className="flex-grow flex flex-col justify-center items-center text-center px-4 py-10 md:py-16"> {/* Adjusted padding */}
          {/* <div className="glow mb-4 animate-fade-in">
            <h2 className="text-[#ffffff] font-spartan text-5xl md:text-xl lg:text-2xl">
              CY'MUN'<span className="text-[#fe0a0a]">24</span>
            </h2>
          </div> */}
          <div className="animate-slide-up">
            <h1 className="font-spartan text-3xl md:text-3xl lg:text-5xl font-bold text-[#ffffff]">
              Capital University Islamabad's Official MUN is finally here!
            </h1>
          </div>
          <div className="mb-8">
            <Timer />
          </div>
          <div className="mt-20">
            <button className="mt-20 text-xl font-montserrat bg-[#fe0a0a] text-white px-6 py-3 rounded-full hover:bg-[#437fa8] transition-colors duration-300 animate-bounce">
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Second Section/Page */}
      <div className="bg-cover bg-center min-h-screen flex flex-col justify-between">
        <div className="flex-grow flex flex-col justify-center items-center text-center px-4 py-10 md:py-20">
          <Stats />
          <ExecutiveCouncil />
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-black text-white text-center py-4 text-xs"> {/* Changed text size to text-xs */}
        &copy; {new Date().getFullYear()} CYMUN. All rights reserved. Powered by Kodevs.
      </div>
    </div>
  );
};

export default Main;
