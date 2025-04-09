import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaHandPointUp } from "react-icons/fa";
import { initCardTiltEffect } from "../animations/animations";
import TechBadge from "./TechBadge";

const ProjectCards = ({ project, index, cardsRef }) => {
  const cardRef = useRef(null);
  const cardContentRef = useRef(null);
  const cardGlowRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Set reference in the parent component's ref array
    if (cardRef.current) {
      cardsRef.current[index] = cardRef.current;
    }

    // Use the animation function from animations.js
    const cleanup = initCardTiltEffect(cardRef, cardContentRef, cardGlowRef);

    // Return cleanup function
    return cleanup;
  }, [index, cardsRef]);

  return (
    <div
      className={`flex flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-6 mb-24 project-item`}
    >
      <div
        className="lg:w-1/2 w-full overflow-hidden rounded-lg perspective-1000 project-image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={cardRef}
          className="tilt-card w-full h-full preserve-3d relative group"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-lg transition-opacity duration-500 group-hover:opacity-100 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-cyan-600 rounded-lg flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 opacity-50">
            <FaHandPointUp className="text-4xl rotate-[-30deg] text-white opacity-100 group-hover:scale-125 transition-transform duration-300" />
          </div>

          <div
            ref={cardGlowRef}
            className="glow-effect absolute inset-0 opacity-0 transition-opacity duration-300 z-0 rounded-lg"
          ></div>
        </div>
      </div>

      {/* Project Details */}
      <div
        ref={cardContentRef}
        className="lg:w-1/2 w-full flex flex-col justify-center relative z-10 transition-transform duration-300"
      >
        <h3 className="text-2xl font-bold font-comfortaa mb-4 text-cyan-400">
          {project.name}
        </h3>

        <div
          className={`transition-all duration-500 overflow-hidden ${
            isHovered ? "max-h-[300px] opacity-100 mb-6" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gray-300 font-montserrat">{project.description}</p>
        </div>

        {/* Tech stack tags*/}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.techstack &&
            project.techstack.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
        </div>

        {/* Project links */}
        <div className="flex gap-4">
          {project.links &&
            project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {link.platform === "GitHub" ? (
                  <FaGithub />
                ) : (
                  <FaExternalLinkAlt />
                )}
                <span>{link.platform}</span>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
