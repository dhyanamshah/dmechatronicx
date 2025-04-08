import React, { useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCards = ({ project, index, cardsRef }) => {
  const cardContentRef = useRef(null);
  const cardGlowRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Set reference in the parent component's ref array
    if (cardRef.current) {
      cardsRef.current[index] = cardRef.current;
    }

    // Add tilt effect
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const percentX = (x - centerX) / centerX;
      const percentY = -((y - centerY) / centerY);

      // Apply the 3D rotation
      card.style.transform = `perspective(1000px) rotateY(${
        percentX * 15
      }deg) rotateX(${percentY * 15}deg) scale3d(1.05, 1.05, 1.05)`;

      // Move content slightly forward in 3D space
      if (cardContentRef.current) {
        cardContentRef.current.style.transform = "translateZ(30px)";
      }

      // Add glow effect that follows the cursor
      if (cardGlowRef.current) {
        cardGlowRef.current.style.opacity = "1";
        cardGlowRef.current.style.background = `
          radial-gradient(
            circle at ${x}px ${y}px, 
            rgba(59, 130, 246, 0.4),
            transparent 60%
          )
        `;
      }
    };

    const handleMouseLeave = () => {
      // Reset transformations when mouse leaves
      card.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";

      if (cardContentRef.current) {
        cardContentRef.current.style.transform = "translateZ(0)";
      }

      if (cardGlowRef.current) {
        cardGlowRef.current.style.opacity = "0";
      }
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners
    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [index, cardsRef]);

  return (
    <div
      ref={cardRef}
      className="tilt-card bg-zinc-900 rounded-xl overflow-hidden shadow-xl cursor-pointer"
    >
      {/* Glow effect overlay */}
      <div
        ref={cardGlowRef}
        className="glow-effect absolute inset-0 opacity-0 transition-opacity duration-300 z-0"
      ></div>

      {/* Card content that will move in 3D space */}
      <div
        ref={cardContentRef}
        className="card-content relative z-10 transition-transform duration-300"
      >
        {/* Project image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <h3 className="text-xl font-exo font-bold text-white">
              {project.name}
            </h3>
          </div>
        </div>

        {/* Project content */}
        <div className="p-5">
          <p className="text-zinc-400 mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-zinc-800 text-blue-400 px-3 py-1 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex justify-end gap-3 mt-auto pt-2">
            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors p-2 rounded-full hover:bg-zinc-800"
              >
                {link.platform === "GitHub" ? (
                  <FaGithub size={20} />
                ) : (
                  <FaExternalLinkAlt size={18} />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
