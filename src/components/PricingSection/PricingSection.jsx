import { Check } from "lucide-react";
import React from "react";

const PricingSection = () => {
  return (
    <div className="my-30">
      <h1 className="font-extrabold text-5xl text-center">
        Simple, Transparent Pricing
      </h1>
      <p className="text-center my-5">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-5 ">
        <div className="left flex flex-col bg-[#f9fafc] p-5 shadow-sm rounded-xl ">
          <div className="">
            {" "}
            <h1 className="font-bold text-2xl">Starter</h1>
            <p className="mb-2">Perfect for getting started</p>
          </div>
          <div className="flex-1">
            {" "}
            <div className="mb-2 ">
              <span className="font-bold text-5xl">$0</span>
              <span className="text-lg">/Month</span>
            </div>
            <div className="mb-5 space-y-2 ">
              <span className="flex">
                <Check className="text-green-500"></Check>{" "}
                <p className="list-style-none">Access to 10 free tools</p>
              </span>
              <span className="flex">
                <Check className="text-green-500"></Check>{" "}
                <p>Basic templates</p>
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
          </div>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-lg w-full rounded-full py-6">
            Get Started Free
          </button>
        </div>
        <div className="middle text-white p-5 shadow-sm rounded-xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">
          <h1 className="font-bold text-2xl">Pro</h1>
          <p className="mb-2">Best for professionals</p>
          <div className="mb-2">
            <span className="font-bold text-5xl">$29</span>
            <span className="text-lg">/Month</span>
          </div>
          <div className="mb-5 space-y-2">
            <span className="flex">
              <Check className="text-white"></Check>{" "}
              <p className="list-style-none">Access to all premium tools</p>
            </span>
            <span className="flex">
              <Check className="text-white"></Check> <p>Unlimited templates</p>
            </span>
            <span className="flex">
              <Check className="text-white"></Check> <p>Priority support</p>
            </span>
            <span className="flex">
              <Check className="text-white"></Check> <p>Unlimited projects</p>
            </span>
            <span className="flex">
              <Check className="text-white"></Check> <p>Cloud sync</p>
            </span>
            <span className="flex">
              <Check className="text-white"></Check> <p>Advanced analytics</p>
            </span>
          </div>
          <button className="btn  bg-white text-lg w-full rounded-full py-6">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">
              {" "}
              Start Pro Trial
            </span>
          </button>
        </div>
        <div className="right bg-[#f9fafc] p-5 shadow-sm rounded-xl ">
          <h1 className="font-bold text-2xl">Enterprise</h1>
          <p className="mb-2">For teams and businesses</p>
          <div className="mb-2">
            <span className="font-bold text-5xl">$99</span>
            <span className="text-lg">/Month</span>
          </div>
          <div className="mb-5 space-y-2">
            <span className="flex">
              <Check className="text-green-500"></Check>{" "}
              <p className="list-style-none">AEverything in Pro</p>
            </span>
            <span className="flex">
              <Check className="text-green-500"></Check>{" "}
              <p>Team collaboration</p>
            </span>
            <span className="flex">
              <Check className="text-green-500"></Check>{" "}
              <p>Custom integrations</p>
            </span>
            <span className="flex">
              <Check className="text-green-500"></Check>{" "}
              <p>Dedicated support</p>
            </span>
            <span className="flex">
              <Check className="text-green-500"></Check> <p>SLA guarantee</p>
            </span>
            <span className="flex">
              <Check className="text-green-500"></Check> <p>Custom branding</p>
            </span>
          </div>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-lg w-full rounded-full py-6">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
