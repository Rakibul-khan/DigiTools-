import { Play } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <div className="flex gap-4 items-center w-11/12 mx-auto mt-20">
      <div className="banner-left flex-1 space-y-3">
        <p className="bg-[#e1e7ff] rounded-full px-3 py-2  font-semibold  text-purple-700 text-center w-[300px] flex items-center gap-2">
          <div>
            <img className="w-full h-4" src="/Rectangle4.png" alt="" />
          </div>
          New:AI-Powered Tools Available
        </p>
        <p className="font-extrabold text-7xl ">
          Supercharge Your Digital Workflow
        </p>
        <p className="text-lg text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>
        <div className="flex items-center gap-3">
          <button className="btn rounded-full px-3 py-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
            Explore Products
          </button>

          <button className="btn rounded-full px-3 py-2  border-2 border-purple-500 hover:bg-purple-500 hover:text-white  ">
            <Play className="text-purple-600 hover:text-white"></Play>
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent hover:text-white  ">
              Watch Demo
            </span>
          </button>
        </div>
      </div>
      <div className="banner-right flex-1 ">
        <img
          className="w-full h-[500px] object-contain"
          src="/banner.png"
          alt="banner image"
        />
      </div>
    </div>
  );
};

export default Banner;
