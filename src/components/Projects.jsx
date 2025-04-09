import React, { useEffect, useRef } from "react";
import { projectsData } from "../constant";
import { initProjectsAnimations } from "../animations/animations";
import ProjectCards from "./ProjectCards";
import BackgroundEffect from "./BackgroundEffect";

const Projects = () => {
  const headerRef = useRef(null);
  const projectRefs = useRef([]);

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
      className="w-screen overflow-hidden h-full bg-zinc-950 sm:py-32 py-20 sm:px-10 px-5 relative"
    >
      <BackgroundEffect
        variant="projects"
        opacity={0.5}
        circleColors={[
          "rgba(5, 165, 188, 0.2), rgba(5, 165, 188, 0.05)",
          "rgba(15, 58, 95, 0.3), rgba(15, 58, 95, 0.05)",
          "rgba(0, 20, 50, 0.4), rgba(0, 20, 50, 0.05)",
        ]}
      />

      <div className="screen-max-width relative z-10">
        <div className="mb-12 w-full items-end">
          <h1 ref={headerRef} id="header" className="title">
            Projects
          </h1>
        </div>

        <div className="w-full">
          {projectsData.map((project, index) => (
            <ProjectCards
              key={project.id}
              project={project}
              index={index}
              cardsRef={projectRefs}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
