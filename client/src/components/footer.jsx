import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className=" bg-base w-screen  h-72  border-t-2  mt-12   ">
        <div className=" container bg-base flex justify-evenly border-b-2 p-4 ml-32">
          <div className="pt-6">
            <span className="font-bold  text-secondary">Lucky Footware</span>
            <ul className="mt-4  text-primary">
              <li>Wear Your luck</li>
            </ul>
          </div>
          <div className="pt-6">
            <span className="font-bold  text-secondary">Quick Links</span>
            <ul className="mt-4 text-primary">
              <li>About Us</li>
              <li>Contact</li>
              <li>Shipping info</li>
              <li>Return</li>
            </ul>
          </div>
          <div className="pt-6">
            <span className="font-bold  text-secondary">Categories</span>
            <ul className="mt-4 text-primary">
              <li>Men's Collection</li>
              <li>Women's Collection</li>
              <li>Kids Collection</li>
              <li>Sale</li>
              <li>New</li>
            </ul>
          </div>
          <div className="pt-6">
            <span className="font-bold  text-secondary">Connect With Us</span>
            <div className="flex gap-4 mt-4 text-primary">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-4 gap-2 text-primary" >
            <MdCopyright />
            <span className=""> 2025 Lucky Footware. All Rights reserved </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
