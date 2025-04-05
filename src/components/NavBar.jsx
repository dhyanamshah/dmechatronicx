import React, { useState, useRef, useEffect } from "react";
import { navItems } from "../constant/index.js";
import { GoDot } from "react-icons/go";
import burger from "../assets/Burger.svg";
import close from "../assets/Burger-Close.svg";
import { GoHomeFill } from "react-icons/go";
import { FaInfo, FaPhone, FaUser, FaDesktop } from "react-icons/fa";
import gsap from "gsap";

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
    if (headerRef.current) {
      if (scrollDir === "down" && !toggle) {
        // Hide navbar when scrolling down
        gsap.to(headerRef.current, {
          yPercent: -100,
          duration: 0.3,
          ease: "power3.out",
        });
      } else {
        // Show navbar when scrolling up
        gsap.to(headerRef.current, {
          yPercent: 0,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    }
  }, [scrollDir, toggle]);

  // GSAP animation for burger menu toggle
  useEffect(() => {
    if (burgerRef.current) {
      if (toggle) {
        // Animation when menu opens
        gsap.fromTo(
          burgerRef.current,
          { rotation: 0, scale: 1 },
          { rotation: 90, scale: 1.2, duration: 0.5, ease: "power2.out" }
        );

        // Animate the menu items
        if (menuRef.current) {
          gsap.fromTo(
            menuRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
          );
        }
      } else {
        // Animation when menu closes
        gsap.fromTo(
          burgerRef.current,
          { rotation: 180, scale: 1.2 },
          { rotation: 0, scale: 1, duration: 0.5, ease: "power2.in" }
        );
      }
    }
  }, [toggle]);

  // Map navigation items to their respective icons
  const navIcons = {
    Home: <GoHomeFill className="mr-2" />,
    About: <FaInfo className="mr-2" />,
    Members: <FaUser className="mr-2" />,
    Projects: <FaDesktop className="mr-2" />,
    Contact: <FaPhone className="mr-2" />,
  };

  return (
    <header
      ref={headerRef}
      className="w-full py-2 sm:px-10 px-5 flex justify-between items-center fixed top-0 left-0 z-50 nav-header transition-transform"
    >
      <nav className="flex w-full screen-max-width">
        <span className="flex absolute justify-start py-2 font-montserrat font-bold px-5 lg:opacity-0 sm:px-2 md:relative">
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
            } p-3 burger-items backdrop-blur-md absolute top-10 right-0 mx-2 my-2 min-w-[150px] z-10 rounded bg-white shadow-md`}
            ref={menuRef}
          >
            <div className="flex flex-col items-center w-full">
              {navItems.map((nav, index) => (
                <div
                  key={nav}
                  className="py-2 w-full text-center"
                  onClick={handleNavItemClick}
                >
                  <span className="flex items-center justify-start text-white cursor-pointer text-sm font-montserrat font-bold hover:text-blue-400">
                    {navIcons[nav]}
                    {nav}
                  </span>
                  {index < navItems.length - 1 && (
                    <div className="border-b border-blue-400 w-full my-2"></div>
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
