import React, { useState, useRef, useEffect } from "react";
import { navItems } from "../constant/index.js";
import { GoDot } from "react-icons/go";
import burger from "/Burger.svg";
import close from "/Burger-Close.svg";
import { GoHomeFill } from "react-icons/go";
import { FaInfo, FaPhone, FaUser } from "react-icons/fa";
import { animateBurgerMenu, animateNavbarScroll } from "../animations/animations.js";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { gsap } from "gsap";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const burgerRef = useRef(null);
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  // Handler to close the burger menu and scroll to section
  const handleNavItemClick = (sectionId) => {
    setToggle(false);
    scrollToSection(sectionId);
  };

  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    // Special handling for Home section - scroll to top
    if (sectionId.toLowerCase() === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setActiveSection("home");
      return;
    }

    // Normal handling for other sections
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      // Smooth scroll to section
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId.toLowerCase());
    }
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Get actual section elements and their positions
      const sections = navItems.map(nav => {
        const element = document.getElementById(nav.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: nav.toLowerCase(),
            top: rect.top + scrollPosition,
            bottom: rect.bottom + scrollPosition,
            height: rect.height
          };
        }
        return null;
      }).filter(Boolean);

      // Special handling for home section (hero section)
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const heroBottom = heroRect.bottom + scrollPosition;
        
        // If we're in the hero section (first 100vh)
        if (scrollPosition < viewportHeight) {
          setActiveSection("home");
          return;
        }
      }

      // Find which section is currently in view
      let currentSection = "home";
      
      for (const section of sections) {
        const sectionTop = section.top - viewportHeight * 0.3; // Start highlighting when section is 30% into viewport
        const sectionBottom = section.bottom - viewportHeight * 0.3;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.id;
          break;
        }
      }

      // If we're past all sections, highlight the last one
      if (scrollPosition >= sections[sections.length - 1]?.bottom - viewportHeight * 0.3) {
        currentSection = sections[sections.length - 1]?.id || "contact";
      }

      setActiveSection(currentSection);
    };

    // Initial check when component mounts
    handleScroll();

    // Add scroll listener with throttling for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  // GSAP animation for burger menu toggle
  useEffect(() => {
    animateBurgerMenu(burgerRef, menuRef, toggle);
  }, [toggle]);

  // Navbar entrance animation
  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          delay: 0.5 
        }
      );
    }
  }, []);

  // Navbar scroll animations
  useEffect(() => {
    const handleScroll = () => {
      animateNavbarScroll(headerRef);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className="w-full py-2 sm:px-10 px-5 flex justify-between items-center fixed top-0 left-0 z-50 nav-header"
    >
      <nav className="flex w-full screen-max-width">
        <span
          className="flex absolute justify-start py-2 font-montserrat font-bold px-5 sm:px-2 md:relative cursor-pointer transition-all duration-300 hover:scale-105 hover:text-blue-300"
          onClick={() => scrollToSection("home")}
        >
          Team D.MechatronicX
        </span>
        <div className="flex justify-between max-sm:hidden font-bold bg-cyan-400/10 backdrop-blur-md rounded-full p-2">
          {navItems.map((nav, index) => (
            <React.Fragment key={nav}>
              {index > 0 && (
                <GoDot className="text-gray-100 self-center mx-1" />
              )}{" "}
              <div
                className={`px-9 cursor-pointer hover:text-blue-300 underline-offset-8 decoration-blue-300 hover:underline transition-all duration-300 hover:scale-105 ${
                  activeSection === nav.toLowerCase()
                    ? "text-blue-300 underline"
                    : ""
                }`}
                onClick={() => scrollToSection(nav.toLowerCase())}
              >
                <span className="flex items-center hover:text-blue-300 transition-colors duration-300">
                  {navIcons[nav]}
                  <span className="text-sm font-montserrat">{nav}</span>
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
                  onClick={() => handleNavItemClick(nav.toLowerCase())}
                >
                  <div
                    className={`flex items-center justify-start text-white text-sm font-montserrat font-bold hover:text-blue-400 px-4 py-2 w-full ${
                      activeSection === nav.toLowerCase() ? "text-blue-400" : ""
                    }`}
                  >
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
