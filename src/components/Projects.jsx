import React, { useEffect, useRef, useState } from "react";
import { projectsData } from "../constant";
import { initProjectsAnimations } from "../animations/animations";
import { FaExternalLinkAlt, FaGithub, FaHandPointUp } from "react-icons/fa";

const Projects = () => {
  const headerRef = useRef(null);
  const projectRefs = useRef([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    // Initialize refs array
    projectRefs.current = projectRefs.current.slice(0, projectsData.length);

    // Use the animation function from animations.js
    const cleanup = initProjectsAnimations(projectRefs, headerRef);
    return cleanup;
  }, []);

  return (
    <section
      id="projects"
      className="w-screen overflow-hidden h-full bg-zinc-950 sm:py-32 py-20 sm:px-10 px-5"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end">
          <h1 ref={headerRef} id="header" className="title">
            Projects
          </h1>
        </div>

        <div className="w-full">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-6 mb-24 opacity-0 project-item`}
            >
              {/* Project Image with Overlay */}
              <div
                className="lg:w-1/2 w-full overflow-hidden rounded-lg perspective-1000 project-image-container"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="tilt-card w-full h-full preserve-3d relative group">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-lg transition-opacity duration-500 group-hover:opacity-100 opacity-0"
                  />
                  {/* Color Overlay with Eye Icon */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-cyan-600 rounded-lg flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 opacity-100">
                    <FaHandPointUp className="text-4xl text-white opacity-70 group-hover:scale-125 transition-transform duration-300" />
                  </div>

                  <div className="glow-effect rounded-lg"></div>
                </div>
              </div>

              {/* Project Details - Always visible */}
              <div className="lg:w-1/2 w-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold font-comfortaa mb-4 text-cyan-400">
                  {project.name}
                </h3>

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    hoveredProject === project.id
                      ? "max-h-[300px] opacity-100 mb-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-300 font-montserrat">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.techstack &&
                    project.techstack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-900/40 text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                </div>

                {/* Project links */}
                <div className="flex gap-4">
                  {project.links &&
                    project.links.map((link) => (
                      <a
                        key={link.platform}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
