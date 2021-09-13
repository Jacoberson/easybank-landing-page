import React from "react";
import desktopIntro from "../images/bg-intro-desktop.svg";
import mobileIntro from "../images/bg-intro-mobile.svg";
import mockups from "../images/image-mockups.png";

const Header = () => {
  return (
    <div className="relative flex flex-col justify-between lg:flex-row lg:justify-end">
      <img
        className="w-screen visible lg:invisible"
        src={mobileIntro}
        alt="intro"
      />
      <img
        className="w-screen invisible lg:visible absolute"
        src={desktopIntro}
        alt="intro"
      />
      <img
        className="w-screen absolute bottom-20 z-0"
        src={mockups}
        alt="mockups"
      />
    </div>
  );
};

export default Header;
