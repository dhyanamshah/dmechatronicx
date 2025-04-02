import logo from "../assets/Ikigai.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, duration: 0.5, scale: 1, y: 0 });
  }, []);
  return (
    <section id="hero" className="w-full nav-height bg-black">
      <div className="h-5/6 flex-center flex-col">
        <img
          id="hero"
          src={logo}
          alt="Logo"
          className="w-1/3 mx-auto max-sm:my-12 max-sm:w-full opacity-0 scale-0 translate-y-64"
        />
      </div>
    </section>
  );
};

export default Hero;
