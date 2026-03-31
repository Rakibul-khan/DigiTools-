import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#101727] py-15">
      <div className="flex justify-between w-11/12 mx-auto  text-white">
        <div>
          <h1 className="font-bold text-3xl mb-3">DigiTools</h1>
          <p className="text-gray-400">
            Premium digital tools for creators,<br></br> professionals, and
            businesses. Work smarter<br></br> with our suite of powerful tools.
          </p>
        </div>
        <div className="second">
          <ul className="space-y-2">
            <li className="text-lg font-medium">Product</li>
            <li className="text-gray-400">Features</li>
            <li className="text-gray-400">Pricing</li>
            <li className="text-gray-400">Templates</li>
            <li className="text-gray-400">Integrations</li>
          </ul>
        </div>
        <div className="third">
          <ul className="space-y-2">
            <li className="text-lg font-medium">Company</li>
            <li className="text-gray-400">About</li>
            <li className="text-gray-400">Blogs</li>
            <li className="text-gray-400">Careers</li>
            <li className="text-gray-400">Press</li>
          </ul>
        </div>
        <div className="fourth">
          <ul className="space-y-2">
            <li className="text-lg font-medium">Resources</li>
            <li className="text-gray-400">Documentation</li>
            <li className="text-gray-400">Help Center</li>
            <li className="text-gray-400">Community</li>
            <li className="text-gray-400">Contact</li>
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-medium mb-2">Social Links</h1>
          <div className="social-links flex gap-2 ">
            <span className="rounded-full bg-white p-3">
              <FaInstagram className="text-xl text-black" />
            </span>
            <span className="rounded-full bg-white p-3">
              <FaFacebook className="text-xl text-black" />
            </span>
            <span className="rounded-full bg-white p-3">
              <FaTwitter className="text-xl text-black"></FaTwitter>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
