import React from "react";
import logo from "../images/logo.svg";
import facebookIcon from "../images/icon-facebook.svg";
import youtubeIcon from "../images/icon-youtube.svg";
import twitterIcon from "../images/icon-twitter.svg";
import pinterestIcon from "../images/icon-pinterest.svg";
import instagramIcon from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-primary-dark-blue w-screen m-auto">
      <div className="w-4/5 flex flex-col items-center pl-20">
        <img className="bg-neutral-white mt-10 mb-8" src={logo} alt="logo" />
        <div className="flex flex-row justify-around">
          <img src={facebookIcon} alt="FaceBook" />
          <img src={youtubeIcon} alt="YouTube" className="mx-4" />
          <img src={twitterIcon} alt="Twitter" />
          <img src={pinterestIcon} alt="Pinterest" className="mx-4" />
          <img src={instagramIcon} alt="Instagram" />
        </div>
        <div className="flex flex-col items-center pt-8">
          <h4 className="text-small text-neutral-white leading-26 tracking-tight-23 mb-4">
            About Us
          </h4>
          <h4 className="text-small text-neutral-white leading-26 tracking-tight-23 mb-4">
            Contact
          </h4>
          <h4 className="text-small text-neutral-white leading-26 tracking-tight-23 mb-4">
            Blog
          </h4>
          <h4 className="text-small text-neutral-white leading-26 tracking-tight-23 mb-4">
            Careers
          </h4>
          <h4 className="text-small text-neutral-white leading-26 tracking-tight-23 mb-4">
            Support
          </h4>
          <h4 className="text-small text-neutral-white leading-26 tracking-tight-23">
            Privacy Policy
          </h4>
        </div>
        <button className="gradient-btn mt-8 center mb-6">
          Request Invite
        </button>
        <p className="text-small text-neutral-white leading-26 tracking-tight-23 mb-10">
          &copy; Easybank. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
