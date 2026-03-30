import React from "react";
import UserImg from "../../assets/user.png";
import PackageImg from "../../assets/package.png";
import RocketImg from "../../assets/rocket.png";

const GetStartedSection = () => {
  return (
    <div className=" mt-15 bg-[#f9fafc]">
      <h1 className="font-extrabold text-5xl mb-2 text-center">
        Get Started in 3 Steps
      </h1>
      <p className="text-center">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="grid grid-cols-3 gap-3 w-11/12 mx-auto">
        <div className="left-card shadow-sm  flex flex-col justify-center items-center p-3 bg-white">
          <div className="flex justify-end bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-3 font-semibold text-lg py-2 rounded-full">
            <span>01</span>
          </div>
          <div className="rounded-full bg-[#f3e8fe] p-4">
            <img src={UserImg} alt="user png image" />
          </div>
          <h1 className="font-bold text-2xl">Create Account</h1>
          <p className="text-[#627382]">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="left-card shadow-sm  flex flex-col justify-center items-center  p-3 bg-white">
          <div className="flex justify-end bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-3 font-semibold text-lg py-2 rounded-full">
            <span>01</span>
          </div>
          <div className="rounded-full bg-[#f3e8fe] p-4">
            <img src={UserImg} alt="user png image" />
          </div>
          <h1 className="font-bold text-2xl">Create Account</h1>
          <p className="text-[#627382]">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="left-card shadow-sm  flex flex-col justify-center items-center p-3 bg-white ">
          <div className="flex justify-end bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-3 font-semibold text-lg py-2 rounded-full">
            <span>01</span>
          </div>
          <div className="rounded-full bg-[#f3e8fe] p-4">
            <img src={UserImg} alt="user png image" />
          </div>
          <h1 className="font-bold text-2xl">Create Account</h1>
          <p className="text-[#627382]">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
