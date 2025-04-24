export const navItems = [
    "Home", "About", "Members", "Projects", "Contact"
];

export const groupCard = [
    {
        id: 0,
        image: "src/assets/group_pic/groupPic2.png",
    },
    {
        id: 1,
        image: "src/assets/group_pic/groupPic1.png",
    },
    {
        id: 2,
        image: "src/assets/group_pic/groupPic3.png",
    },
    {
        id: 3,
        image: "src/assets/group_pic/groupPic4.png"
    },
];

export const membersData = {
    "Frontend": [
        {
            id: 1,
            name: "Symond Barba",
            role: "Frontend Developer",
            description: " A passionate frontend developer with a knack for creating beautiful and functional user interfaces. Always eager to learn and grow in the field.",
            details: "",
            image: "src/assets/profile/symond.png", // profile image path
            skills: ["React", "Tailwind CSS", "JavaScript"],
            quote: "Ang mahalaga ay importante.",
            links: [
                { platform: "GitHub", url: "https://github.com/04Sai" },
                { platform: "Facebook", url: "https://www.facebook.com/Symond0422" },
            ]
        }
    ],
    "Project Manager": [
        {
            id: 2,
            name: "Brando Dela Torre",
            role: "Project Manager",
            description: " A dedicated project manager with a focus on delivering high-quality results on time and within budget. Skilled in team collaboration and project planning.",
            image: "src/assets/profile/brando.png",
            skills: ["PHP", "Python", "JavaScript"],
            quote: "Why seek validation from the world who crucified a perfect man?",
            links: [
                { platform: "GitHub", url: "https://github.com/brandodt" },
                { platform: "Facebook", url: "https://www.facebook.com/profile.php?id=100085329200691#" },
            ]
        }
    ],
    "UI/UX Designer": [
        {
            id: 3,
            name: "Kenn Harvey Brocoy",
            role: "UI/UX Designer",
            description: " A creative UI/UX designer with a passion for crafting user-centered designs. Committed to enhancing user experiences through innovative design solutions.",
            image: "src/assets/profile/kenn.png",
            skills: ["HTML", "CSS", "Figma"],
            quote: "Why seek validation from the world who crucified a perfect man?",
            links: [
                { platform: "GitHub", url: "https://github.com/KennedyHFB" },
                { platform: "Facebook", url: "https://www.facebook.com/elirapsa" },
            ]
        }

    ],
    "QA Tester": [
        {
            id: 4,
            name: "Angelica Marquez",
            role: "QA Tester",
            description: " A detail-oriented QA tester with a strong focus on ensuring software quality. Experienced in manual and automated testing methodologies.",
            image: "src/assets/profile/angge.png",
            skills: ["HTML", "CSS", "UI/UX Design"],
            quote: "Why seek validation from the world who crucified a perfect man?",
            links: [
                { platform: "GitHub", url: "https://github.com/anggemrqz" },
                { platform: "Facebook", url: "https://www.facebook.com/anggemrqz" },
            ]
        },
        {
            id: 5,
            name: "Nicole Rontal",
            role: "QA Tester",
            description: " A detail-oriented QA tester with a strong focus on ensuring software quality. Experienced in manual and automated testing methodologies.",
            image: "src/assets/profile/nicole.png",
            skills: ["HTML", "CSS", "UI/UX Design"],
            quote: "Quality is not an act, it is a habit (sent with fire effect)",
            links: [
                { platform: "GitHub", url: "https://github.com/nikssss15" },
                { platform: "Facebook", url: "https://www.facebook.com/nicole.rontal.15" },
            ]
        }
    ]
};

export const projectsData = [
    {
        id: 1,
        name: "Art Gallery",
        description: "Our virtual art gallery is a dynamic space where creativity and connection thrive. Explore a diverse range of artworks, from timeless classics to contemporary innovations, and discover pieces that inspire and captivate. With regular artist spotlights, engaging discussions, and exclusive content, our platform fosters a vibrant community where art lovers can connect, share, and grow.",
        date: "Year 2022",
        image: "src/assets/projects/art-gallery.png",
        video: "src/assets/projects/art-gallery.mp4",
        techstack: ["HTML", "Bulma CSS", "JavaScript"],
        links: [
            { platform: "Visit Website", url: "https://cvsu-art.netlify.app/" }
        ]
    },
    {
        id: 2,
        name: "Self-Aspect",
        description: "An educational website that explains adolescent development, puberty, and body image through the lens of psychological theories. Designed for students, it features clear content and a clean, user-friendly interface.",
        date: "Year 2023",
        image: "src/assets/projects/self-aspect.png",
        video: "src/assets/projects/self-aspect.mp4",
        techstack: ["HTML", "Bulma CSS", "JavaScript"],
        links: [
            { platform: "Visit Website", url: "https://cvsu-self-aspect.netlify.app/" }
        ]
    },
    {
        id: 3,
        name: "GoodShot POS",
        description: "A point-of-sale system designed for small to medium-sized businesses. It offers features like inventory management, and sales tracking. It has a admin dashboard for managing products and sales, and a cashier interface for processing transactions.",
        date: "Year 2022",
        image: "src/assets/projects/GoodShotPOS.png",
        video: "src/assets/projects/GoodShotPOS.mp4",
        techstack: ["HTML", "Bulma", "PHP"],
        links: [
            { platform: "Visit Website", url: "https://a76c-2a09-bac5-4fa5-e6-00-17-347.ngrok-free.app/" }
        ]
    },
    {
        id: 4,
        name: "BCBI",
        description: "The Brothers of Christ of Banneux, Inc. (BCBI) supports vulnerable individuals—Out of School Youth, people with disabilities, and the elderly—through residential care, vocational training, and holistic support. BCBI helps individuals gain self-sufficiency while nurturing their physical, emotional, and spiritual well-being. Guided by values of charity, simplicity, and joy, the organization offers free education, livelihood programs, and personalized care to empower communities and transform lives.",
        date: "Year 2024",
        image: "src/assets/projects/BCBI.png",
        video: "src/assets/projects/bcbi.mp4",
        techstack: ["React", "Bulma CSS", "JavaScript"],
        links: [
            { platform: "Visit Website", url: "https://bcbi.netlify.app/" }
        ]
    },
    {
        id: 5,
        name: "Automatic Water Dispenser using Arduino Uno R4 Wifi",
        description: "An innovative water dispenser that can be controlled via a mobile app. Built using Arduino Uno R4 Wifi. It features a user-friendly interface, real-time monitoring, and connectivity using Wifi.",
        date: "Year 2024",
        image: "src/assets/projects/water.png",
        techstack: ["React Native", "Expo"],
    },
    {
        id: 6,
        name: "TechHub",
        description: "A online shopping platform for apple products. It offers a user-friendly interface, secure payment options, and a wide range of products.",
        date: "Year 2024",
        image: "src/assets/projects/techHub.png",
        video: "src/assets/projects/TechHub.mp4",
        techstack: ["Vue", "Pinia", "Bootstrap"],
        links: [
            { platform: "Visit Website", url: "https://secure-techhub.netlify.app" }
        ]
    },

];

