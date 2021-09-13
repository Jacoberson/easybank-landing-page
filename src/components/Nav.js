import React from "react";
import logo from "../images/logo.svg";
import openedMenu from "../images/icon-hamburger.svg";
import closedMenu from "../images/icon-close.svg";

const Nav = ({ visible, setVisible }) => {
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <div className="relative w-screen h-16 flex justify-between items-center bg-neutral-white z-10">
      <img className="absolute left-5" src={logo} alt="logo" />
      <div className="absolute right-5 visible lg:invisible">
        {visible ? (
          <>
            <img
              src={closedMenu}
              alt="opened menu"
              onClick={() => closeMenu()}
            />
            <nav className="absolute -right-2 top-16 h-auto flex flex-col items-center px-36 bg-neutral-white z-10 rounded">
              <p className="text-body leading-21 tracking-tight pt-8">Home</p>
              <p className="text-body leading-21 tracking-tight pt-6">About</p>
              <p className="text-body leading-21 tracking-tight pt-6">
                Contact
              </p>
              <p className="text-body leading-21 tracking-tight pt-6">Blog</p>
              <p className="text-body leading-21 tracking-tight pt-6 pb-8">
                Careers
              </p>
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
