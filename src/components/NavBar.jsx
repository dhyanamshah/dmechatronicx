import React, { useState, useRef, useEffect } from "react";
import { navItems } from "../constant/index.js";
import { GoDot } from "react-icons/go";
import burger from "../assets/Burger.svg";
import close from "../assets/Burger-Close.svg";
import { GoHomeFill } from "react-icons/go";

import { FaInfo, FaPhone, FaUser } from "react-icons/fa";
import {
  animateNavbarScroll,
  animateBurgerMenu,
} from "../animations/animations.js";
import { FaScrewdriverWrench } from "react-icons/fa6";


const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrollDir, setScrollDir] = useState("up");
  const [prevScrollY, setPrevScrollY] = useState(0);
  const burgerRef = useRef(null);
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  // Handler to close the burger menu
  const handleNavItemClick = () => {
    setToggle(false);
  };

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        // Always show navbar at top of page
        setScrollDir("up");
      } else if (currentScrollY > prevScrollY) {
        // Scrolling down
        setScrollDir("down");
      } else {
        // Scrolling up
        setScrollDir("up");
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  // Animate navbar based on scroll direction
  useEffect(() => {
    animateNavbarScroll(headerRef, scrollDir, toggle);
  }, [scrollDir, toggle]);

  // GSAP animation for burger menu toggle
  useEffect(() => {
    animateBurgerMenu(burgerRef, menuRef, toggle);
  }, [toggle]);

  // Map navigation items to their respective icons
  const navIcons = {
    Home: <GoHomeFill className="mr-2" />,
    About: <FaInfo className="mr-2" />,
    Members: <FaUser className="mr-2" />,
    Projects: <FaScrewdriverWrench className="mr-2" />,
    Contact: <FaPhone className="mr-2" />,
  };

  return (
    <header
      ref={headerRef}
      className="w-full py-2 sm:px-10 px-5 flex justify-between items-center fixed top-0 left-0 z-50 nav-header transition-transform"
    >
      <nav className="flex w-full screen-max-width">
        <span className="flex absolute justify-start py-2 font-montserrat font-bold px-5 sm:px-2 md:relative">
          GOODSHOT
        </span>
        <div className=" flex justify-between max-sm:hidden font-bold bg-cyan-400/10 backdrop-blur-md rounded-full p-2">
          {navItems.map((nav, index) => (
            <React.Fragment key={nav}>
              {index > 0 && (
                <GoDot className="text-gray-100 self-center mx-1" />
              )}{" "}
              <div className="px-9 cursor-pointer hover:text-blue-300 underline-offset-8 decoration-blue-300 hover:underline">
                <span className="flex items-center hover:text-blue-300">
                  {navIcons[nav]}
                  <span className=" text-sm font-montserrat ">{nav}</span>
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* mobile nav */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : burger}
            alt="menu"
            className="w-[25px] h-[25px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            ref={burgerRef}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-3 burger-items backdrop-blur-md absolute top-16 right-0 mx-2 my-2 min-w-[180px] z-50 rounded bg-black/80 shadow-md`}
            ref={menuRef}
          >
            <div className="flex flex-col items-center w-full">
              {navItems.map((nav, index) => (
                <div
                  key={nav}
                  className="py-2 w-full text-center cursor-pointer"
                  onClick={handleNavItemClick}
                >
                  <div className="flex items-center justify-start text-white text-sm font-montserrat font-bold hover:text-blue-400 px-4 py-2 w-full">
                    {navIcons[nav]}
                    <span className="ml-2">{nav}</span>
                  </div>
                  {index < navItems.length - 1 && (
                    <div className="border-b border-blue-400 w-full my-1"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
