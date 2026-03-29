import React from "react";

const ActiveUser = () => {
  return (
    <div className="mt-8 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-8 ">
      <div className="w-10/12 mx-auto flex justify-around items-center">
        <div className="left">
          <h1 className="font-extrabold text-6xl">50K+</h1>
          <p className="text-2xl font-medium">Active Users</p>
        </div>

        <div className="middle">
          <h1 className="font-extrabold text-6xl">200+</h1>
          <p className="text-2xl font-medium">Premium Tools</p>
        </div>
        <div className="right">
          <h1 className="font-extrabold text-6xl">4.9</h1>
          <p className="text-2xl font-medium">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default ActiveUser;
