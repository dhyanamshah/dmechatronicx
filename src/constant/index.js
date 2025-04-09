export const navItems = [
    "Home", "About", "Members", "Projects", "Contact"
];

export const membersData = {
    "Frontend": [
        {
            id: 1,
            name: "Symond Barba",
            role: "Frontend Developer",
            image: "src/assets/profile/symond.png", // profile image path
            skills: ["React", "Tailwind CSS", "JavaScript"],
            links: [
                { platform: "GitHub", url: "https://github.com/04Sai" }
            ]
        }
    ],
    "Project Manager": [
        {
            id: 2,
            name: "Brando Dela Torre",
            role: "Project Manager",
            image: "src/assets/profile/brando.png",
            skills: ["React", "Tailwind CSS", "JavaScript"],
            links: [
                { platform: "GitHub", url: "https://github.com/brandodt" }
            ]
        }
    ],
    "UI/UX Designer": [
        {
            id: 3,
            name: "Kenn Harvey Brocoy",
            role: "UI/UX Designer",
            // Update with a valid image path or use a placeholder
            image: "src/assets/profile/kenn.png",
            skills: ["Figma", "Adobe XD", "Prototyping"],
            links: [
                { platform: "Facebook", url: "" }
            ]
        }

    ],
    "QA Tester": [
        {
            id: 4,
            name: "Angelica Marquez",
            role: "QA Tester",
            image: "src/assets/profile/nicole.png", // Make sure this file exists in the public/assets folder
            skills: [],
            links: [
                { platform: "Facebook", url: "" }
            ]
        },
        {
            id: 5,
            name: "Nicole Rontal",
            role: "QA Tester",
            image: "src/assets/profile/nicole.png", // Replace with actual image path
            skills: ["React", "Tailwind CSS", "JavaScript"],
            links: [
                { platform: "Facebook", url: "" }
            ]
        }
    ]
};

export const projectsData = [
    {
        id: 1,
        name: "Art Gallery",
        description: "Our virtual art gallery is a dynamic space where creativity and connection thrive. Explore a diverse range of artworks, from timeless classics to contemporary innovations, and discover pieces that inspire and captivate. With regular artist spotlights, engaging discussions, and exclusive content, our platform fosters a vibrant community where art lovers can connect, share, and grow.",
        image: "src/assets/projects/art-gallery.png", // Replace with actual image path
        techstack: ["HTML", "Bulma CSS", "JavaScript"],
        links: [
            { platform: "GitHub", url: "https://github.com" },
            { platform: "Visit Website", url: "https://cvsu-art.netlify.app/" }
        ]
    },
    {
        id: 2,
        name: "BCBI",
        description: "TThe Brothers of Christ of Banneux, Inc. (BCBI) supports vulnerable individuals—Out of School Youth, people with disabilities, and the elderly—through residential care, vocational training, and holistic support. BCBI helps individuals gain self-sufficiency while nurturing their physical, emotional, and spiritual well-being. Guided by values of charity, simplicity, and joy, the organization offers free education, livelihood programs, and personalized care to empower communities and transform lives.",
        image: "src/assets/projects/BCBI.png", // Replace with actual image path
        techstack: ["React", "Bulma CSS", "JavaScript"],
        links: [
            { platform: "GitHub", url: "https://github.com" },
            { platform: "Visit Website", url: "https://bcbi.netlify.app/" }
        ]
    },
    {
        id: 3,
        name: "Self-Aspect",
        description: "A cutting-edge application that pushes the boundaries of what's possible with current technologies. This project showcases our ability to implement complex features while maintaining a clean and accessible interface.",
        image: "src/assets/projects/self-aspect.png", // Replace with actual image path
        techstack: ["HTML", "Bulma CSS", "JavaScript"],
        links: [
            { platform: "GitHub", url: "https://github.com" },
            { platform: "Visit Website", url: "https://cvsu-self-aspect.netlify.app/" }
        ]
    }
];

