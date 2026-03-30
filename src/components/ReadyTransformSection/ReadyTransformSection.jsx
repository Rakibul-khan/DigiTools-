import React from "react";

const ReadyTransformSection = () => {
  return (
    <div className="px-10 py-20 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-center flex justify-center items-center">
      <div>
        {" "}
        <h1 className="font-extrabold text-[40px] ">
          Ready to Transform Your Workflow?
        </h1>
        <p className="my-4">
          Join thousands of professionals who are already using Digitools to
          work smarter.<br></br>Start your free trial today.
        </p>
        <div className="flex gap-3 justify-center my-4">
          <button className="btn rounded-full px-4 py-5 ">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">
              Explore Products
            </span>
          </button>
          <button className="btn btn-outline rounded-full px-4 py-5">
            View Pricing
          </button>
        </div>
        <p>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default ReadyTransformSection;
