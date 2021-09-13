import React, { useState } from "react";
import logo from "../images/logo.svg";
import openedMenu from "../images/icon-hamburger.svg";
import closedMenu from "../images/icon-close.svg";

const Nav = () => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <div className="relative w-screen h-16 flex justify-between items-center relative bg-neutral-white z-10">
      <img className="absolute left-5" src={logo} alt="logo" />
      <div className="absolute right-5 visible lg:invisible">
        {visible ? (
          <>
            <img
              src={closedMenu}
              alt="opened menu"
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
          <img src={openedMenu} alt="closed menu" onClick={() => openMenu()} />
        )}
      </div>
    </div>
  );
};

export default Nav;
