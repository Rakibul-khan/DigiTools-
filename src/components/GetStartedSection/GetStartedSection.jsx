import React from "react";
import UserImg from "../../assets/user.png";
import PackageImg from "../../assets/package.png";
import RocketImg from "../../assets/rocket.png";

const GetStartedSection = () => {
  return (
    <div className=" mt-15 bg-[#f9fafc] p-20">
      <h1 className="font-extrabold text-3xl md:text-5xl mb-2 text-center">
        Get Started in 3 Steps
      </h1>
      <p className="text-center my-4">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-11/12 mx-auto">
        <div className="left-card rounded-xl shadow-sm  flex flex-col justify-center items-center p-3  bg-whiten w-full">
          <div className="flex justify-end w-full">
            <div className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-3 font-semibold text-lg py-2 rounded-full">
              <span>01</span>
            </div>
          </div>
          <div className="rounded-full bg-[#f3e8fe] p-4">
            <img src={UserImg} alt="user png image" />
          </div>
          <h1 className="font-bold text-2xl px-2 my-2">Create Account</h1>
          <p className="text-[#627382] text-center">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="middle-card rounded-xl shadow-sm  flex flex-col justify-center items-center p-5 bg-white">
          <div className="flex  w-full justify-end">
            <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-3 font-semibold text-lg py-2 rounded-full">
              <span>02</span>
            </div>
          </div>
          <div className="rounded-full bg-[#f3e8fe] p-4">
            <img src={PackageImg} alt="user png image" />
          </div>
          <h1 className="font-bold text-2xl my-2">Choose Products</h1>
          <p className="text-[#627382] text-center">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>
        <div className="right-card rounded-xl shadow-sm  flex flex-col justify-center items-center p-5 bg-white">
          <div className="flex justify-end w-full">
            <div className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-3 font-semibold text-lg py-2 rounded-full">
              <span>03</span>
            </div>
          </div>
          <div className="rounded-full bg-[#f3e8fe] p-4">
            <img src={RocketImg} alt="user png image" />
          </div>
          <h1 className="font-bold text-2xl my-2">Start Creating</h1>
          <p className="text-[#627382] text-center">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
