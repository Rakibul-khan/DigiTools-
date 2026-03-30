import { Check } from "lucide-react";
import React from "react";

const PricingSection = () => {
  return (
    <div>
      <h1 className="font-extrabold text-5xl text-center">
        Simple, Transparent Pricing
      </h1>
      <p className="text-center my-3">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-5 ">
        <div className="left bg-[#f9fafc] p-3 shadow-sm">
          <h1 className="font-bold text-2xl">Starter</h1>
          <p>Perfect for getting started</p>
          <div>
            <span className="font-bold text-5xl">$0</span>/Month
          </div>
          <div>
            <span className="flex">
              <Check className="text-green-500"></Check>{" "}
              <p className="list-style-none">Access to 10 free tools</p>
            </span>
            <span className="flex">
              <Check className="text-green-500"></Check> <p>Basic templates</p>
            </span>
            <span className="flex">
              <Check className="text-green-500"></Check>{" "}
              <p>Community support</p>
            </span>
            <span className="flex">
              <Check className="text-green-500"></Check>{" "}
              <p>1 project per month</p>
            </span>
          </div>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-lg w-full rounded-full py-2">
            Get Started Free
          </button>
        </div>
        <div className="left bg-[#f9fafc] p-3">
          <h1 className="font-bold text-2xl">Starter</h1>
          <p>Perfect for getting started</p>
          <div>
            <span className="font-bold text-5xl">$0</span>/Month
          </div>
          <div>
            <span className="flex">
              <Check className="text-green-500"></Check>{" "}
              <p className="list-style-none">Access to 10 free tools</p>
            </span>
            <span className="flex">
              <Check className="text-green-500"></Check> <p>Basic templates</p>
            </span>
            <span className="flex">
              <Check className="text-green-500"></Check>{" "}
              <p>Community support</p>
            </span>
            <span className="flex">
              <Check className="text-green-500"></Check>{" "}
              <p>1 project per month</p>
            </span>
          </div>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-lg w-full rounded-full py-2">
            Get Started Free
          </button>
        </div>
        <div className="left bg-[#f9fafc] p-3">
          <h1 className="font-bold text-2xl">Starter</h1>
          <p>Perfect for getting started</p>
          <div>
            <span className="font-bold text-5xl">$0</span>/Month
          </div>
          <div>
            <span className="flex">
              <Check className="text-green-500"></Check>{" "}
              <p className="list-style-none">Access to 10 free tools</p>
            </span>
            <span className="flex">
              <Check className="text-green-500"></Check> <p>Basic templates</p>
            </span>
            <span className="flex">
              <Check className="text-green-500"></Check>{" "}
              <p>Community support</p>
            </span>
            <span className="flex">
              <Check className="text-green-500"></Check>{" "}
              <p>1 project per month</p>
            </span>
          </div>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-lg w-full rounded-full py-2">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
