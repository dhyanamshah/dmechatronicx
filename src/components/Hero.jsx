import logo from "../assets/logo1.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechStack from "./TechStack";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    // Initial animations for hero elements
    gsap.to("#hero", { opacity: 1, duration: 0.5, scale: 1, x: 0 });
    gsap.to("#hero-text", { opacity: .65, duration: 0.5, delay: 0.3, x: -50 });
    gsap.to("#welcome-text", { opacity: 1, duration: 0.5, delay: 0.5, x: 0 });
    gsap.to("#welcome-description", {
      opacity: 1,
      duration: 0.5,
      delay: 0.7,
      x: 0,
    });

    // Modified scroll trigger for the hero section - maintain visibility while scrolling
    gsap.to(".hero-container", {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        pin: false, // Remove pinning to allow natural scrolling
      },
    });

    // Fade and scale hero elements as user scrolls down
    gsap.to([".hero-content", ".tech-stack"], {
      scrollTrigger: {
        trigger: "body",
        start: "5% top",
        end: "30% top",
        scrub: true,
      },
      opacity: 0.2,
      scale: 0.95,
      y: -20,
    });
  }, []);

  return (
    <section className="hero-container h-screen w-full fixed top-0 left-0 z-0 herobox">
      <div className="hero-space-top w-full h-16"></div>
      <div id="hero" className="w-full h-full mx-auto relative">
        <div className="h-full flex-center flex-col relative z-0">
          <div className="hero-content flex flex-col items-center justify-center gap-4 w-full px-4">
            <img
              id="hero"
              src={logo}
              alt="Logo"
              className="w-[100vh] mx-auto max-sm:my-12 max-sm:w-full opacity-0 scale-0 lg:mb-0 -translate-x-96 mt-5 px-3 md:mb-10"
            />
            <span>
              <h1
                id="hero-text"
                className="font-comfortaa ml-12 text-white font-bold lg:text-3xl text-center opacity-0 translate-y-[-9vh] translate-x-32 relative"
              >
                Team Portfolio
              </h1>
            </span>
          </div>
          <div className="tech-stack">
            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
