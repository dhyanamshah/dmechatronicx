import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ===== HERO ANIMATIONS =====
export const initHeroAnimations = () => {
    // Initial animations for hero elements
    gsap.to("#hero", { opacity: 1, duration: 0.5, scale: 1, x: 0 });
    gsap.to("#hero-text", { opacity: .65, duration: 0.5, delay: 0.3, x: -50 });

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
};

// ===== ABOUTUS ANIMATIONS =====
export const initAboutUsAnimations = () => {
    // Create a timeline for the about section animations
    const aboutTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "top bottom-=100",
            end: "bottom top+=100",
            toggleActions: "play none none reverse", // play on enter, reverse on leave
            onEnter: () => console.log("About section entered"),
            onLeaveBack: () => console.log("About section left"),
        },
    });

    // Add animations to the timeline
    aboutTl.to("#header", { opacity: 1, duration: 1, x: 0 });
    aboutTl.fromTo(
        ".para",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.2 },
        "-=0.5" // Start a bit before the previous animation finishes
    );

    // Clean up function
    return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
};

// ===== TECHSTACK ANIMATIONS =====
export const initTechStackAnimations = (iconsRef, titleRef, subRef) => {
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
};

// ===== MISSIONANDVISION ANIMATIONS =====
export const initMissionVisionAnimations = () => {
    // Creating a timeline for mission and vision animations
    const mvTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#mission",
            start: "top bottom-=50",
            end: "bottom top+=100",
            toggleActions: "play none none reverse", // play on enter, reverse on leave
        },
    });

    // Add animations to the timeline
    mvTl.fromTo(
        "#mission",
        { opacity: 0, x: 50 },
        { opacity: 1, x: -20, duration: 1, ease: "power2.inOut" }
    );

    mvTl.fromTo(
        "#vision",
        { opacity: 0, x: 50 },
        { opacity: 1, x: -20, duration: 1, ease: "power2.inOut" },
        "-=0.7" // Start a bit before the previous animation finishes
    );

    // Clean up function
    return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
};

// ===== NAVBAR ANIMATIONS =====

// Handle navbar visibility based on scroll direction
export const animateNavbarScroll = (headerRef) => {
    if (headerRef.current) {
        // Always keep navbar visible by setting yPercent to 0
        gsap.to(headerRef.current, {
            yPercent: 0,
            duration: 0.3,
            ease: "power3.out",
        });
    }
};

// Handle burger menu toggle animations
export const animateBurgerMenu = (burgerRef, menuRef, toggle) => {
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
                    { opacity: 0, y: -10, pointerEvents: "none" },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        ease: "back.out(1.7)",
                        pointerEvents: "auto",
                        onComplete: () => {
                            // Ensure menu is clickable after animation
                            if (menuRef.current) {
                                menuRef.current.style.pointerEvents = "auto";
                            }
                        }
                    }
                );
            }
        } else {
            // Animation when menu closes
            gsap.fromTo(
                burgerRef.current,
                { rotation: -35, scale: 1.2, duration: 0.2 },
                { rotation: 0, scale: 1, duration: 0.5, ease: "power2.out" }
            );

            // Ensure menu items are not clickable when hidden
            if (menuRef.current) {
                gsap.to(menuRef.current, {
                    pointerEvents: "none",
                    duration: 0.1
                });
            }
        }
    }
};

// ===== PROJECTS ANIMATIONS =====
export const initProjectsAnimations = (projectsRef, headerRef) => {
    // Animate header
    gsap.fromTo(
        headerRef.current,
        { opacity: 0, x: -56 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );

    // Create a timeline for the project items with scroll trigger
    const projectsTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects",
            start: "top bottom-=100",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
        }
    });

    // Animate each project with a staggered effect
    projectsRef.current.forEach((project, index) => {
        const isEven = index % 2 === 0;

        projectsTl.fromTo(
            project,
            {
                opacity: 0,
                x: isEven ? -50 : 50  // Alternate direction based on even/odd
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out",
            },
            index * 0.2 // Stagger timing
        );
    });

    // Clean up function
    return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
            if (trigger.vars.trigger === "#projects") {
                trigger.kill();
            }
        });
    };
};

// ===== CARD TILT EFFECT =====
export const initCardTiltEffect = (cardRef, cardContentRef, cardGlowRef) => {
    if (!cardRef || !cardRef.current) return () => { };

    const card = cardRef.current;

    const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const percentX = (x - centerX) / centerX;
        const percentY = -((y - centerY) / centerY);

        // Apply the 3D rotation
        card.style.transform = `perspective(1000px) rotateY(${percentX * 15
            }deg) rotateX(${percentY * 15}deg) scale3d(1.05, 1.05, 1.05)`;

        // Move content slightly forward in 3D space
        if (cardContentRef && cardContentRef.current) {
            cardContentRef.current.style.transform = "translateZ(30px)";
        }

        // Add glow effect that follows the cursor
        if (cardGlowRef && cardGlowRef.current) {
            cardGlowRef.current.style.opacity = "1";
            cardGlowRef.current.style.background = `
        radial-gradient(
          circle at ${x}px ${y}px, 
          rgba(10, 87, 246, 1),
          transparent 10%
        )
      `;
        }
    };

    const handleMouseLeave = () => {
        // Reset transformations when mouse leaves
        card.style.transform =
            "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";

        if (cardContentRef && cardContentRef.current) {
            cardContentRef.current.style.transform = "translateZ(0)";
        }

        if (cardGlowRef && cardGlowRef.current) {
            cardGlowRef.current.style.opacity = "0";
        }
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    // Return a cleanup function
    return () => {
        if (card) {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseleave", handleMouseLeave);
        }
    };
};

// ===== MEMBER MODAL ANIMATIONS =====
export const initMemberModalAnimations = (modalRef, contentRef, onClose) => {
    const modal = modalRef.current;
    const content = contentRef.current;

    // Set initial state for container - fully visible but with content hidden
    gsap.set(modal, {
        opacity: 1,
        clipPath: "inset(0 0 0 0)", // Ensure the container is fully visible
    });

    // Set initial state for content - positioned at bottom of card
    gsap.set(content, {
        y: "100%",
        opacity: 0.8,
    });

    // Animate content up from bottom of card
    gsap.to(content, {
        y: "0%",
        opacity: 1,
        duration: 0.4,
        ease: "power1.out",
        clearProps: "transform",
    });

    // Animation for closing the modal
    const handleClose = (e) => {
        if (e) e.stopPropagation();

        // Animate content down first
        gsap.to(content, {
            y: "100%",
            opacity: 0.8,
            duration: 0.3,
            ease: "power1.in",
            onComplete: () => {
                // Then fade out the entire modal
                gsap.to(modal, {
                    opacity: 0,
                    duration: 0.2,
                    onComplete: onClose,
                });
            },
        });
    };

    // Return the close handler and setup event listener
    const setupEscKeyListener = () => {
        const handleEscKey = (e) => {
            if (e.key === "Escape") {
                handleClose(e);
            }
        };

        document.addEventListener("keydown", handleEscKey);

        // Return cleanup function
        return () => {
            document.removeEventListener("keydown", handleEscKey);
        };
    };

    return { handleClose, setupEscKeyListener };
};
