import { FaFigma, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGreensock } from "react-icons/si";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const TechStack = () => {
  const technologies = [
    { icon: FaFigma, name: "Figma", color: "text-white" },
    { icon: FaReact, name: "React", color: "text-blue-500" },
    { icon: RiTailwindCssFill, name: "Tailwind", color: "text-cyan-400" },
    { icon: SiGreensock, name: "Greensock", color: "text-green-500" },
  ];

  const iconsRef = useRef([]);
  const titleRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    // Initial setup for all elements
    gsap.set(iconsRef.current, { opacity: 0, y: 70 });
    gsap.set([titleRef.current, subRef.current], { opacity: 0, y: -20 });

    // Animate title first
    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.6,
      ease: "power2.out",
    });

    // Then animate subtitle
    gsap.to(subRef.current, {
      opacity: 0.5,
      y: 0,
      duration: 0.7,
      delay: 1,
      ease: "power2.out",
    });

    // Then animate tech items one by one
    iconsRef.current.forEach((icon, index) => {
      gsap.to(icon, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.25 + 0.25 * index,
        ease: "power3.in",
      });
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-5 px-4">
      <h2
        id="title"
        ref={titleRef}
        className="text-3xl/3 font-exo font-bold text-center mb-8 text-blue-500 dark:text-white opacity-0"
      >
        Built With Modern Technologies
      </h2>

      <div className="p-1 rounded-xl">
        <h3
          id="sub"
          ref={subRef}
          className="text-xl font-prompt text-center text-white mb-3 font-medium opacity-0"
        >
          Made Using
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              ref={(el) => (iconsRef.current[index] = el)}
              className="flex flex-col items-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg hover:bg-gray-700/40 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-600/30 opacity-0"
            >
              <tech.icon className={`text-4xl ${tech.color} mb-2`} />
              <span className="text-white font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
