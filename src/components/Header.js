import React, { useState } from "react";
import logo from "../images/logo.svg";
import openedMenu from "../images/icon-hamburger.svg";
import closedMenu from "../images/icon-close.svg";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <div className="w-screen flex justify-between items-center relative top-5">
      <img className="relative left-5" src={logo} alt="logo" />
      <div className="relative right-5 visible lg:invisible">
        {visible ? (
          <>
            <img
              src={closedMenu}
              alt="closed menu"
              onClick={() => closeMenu()}
            />
            <nav className="w-9/12 h-auto container flex flex-col items-center absolute">
              <p className="text-body leading-21 tracking-tight">Home</p>
              <p className="text-body leading-21 tracking-tight">About</p>
              <p className="text-body leading-21 tracking-tight">Contact</p>
              <p className="text-body leading-21 tracking-tight">Blog</p>
              <p className="text-body leading-21 tracking-tight">Careers</p>
            </nav>
          </>
        ) : (
          <img src={openedMenu} alt="opened menu" onClick={() => openMenu()} />
        )}
      </div>
    </div>
  );
};

export default Header;
