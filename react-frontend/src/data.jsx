// import images
import projectAREscapeRoomMainImage from './assets/ar-escape-room/work-ar-escape-room.jpg';
import projectCaiusAdventuresVRMainImage from './assets/caius-adventures-vr/Dungeon1Boss.PNG';
import projectSpaceInvadersCrazyLudiMainImage from './assets/space-invaders/work-space-invaders-crazy-ludi.PNG';
import logoLanguageCSharp from './assets/skills/c-sharp-c-seeklogo.svg';
import logoLanguageJava from './assets/skills/java-4-logo-svgrepo-com.svg';
import logoLanguagePython from './assets/skills/python-logo-only.png';
import logoLanguageSQL from './assets/skills/sql-seeklogo.svg';

// Import technology images
import unityLogo from './assets/skills/U_Cube_1C_White.png';
import blenderLogo from './assets/skills/blender_icon_1024x1024.png';

// Import social link images
import githubLogo from './assets/socialLinks/github-mark-white.png';
import linkedInLogo from './assets/socialLinks/LI-In-Bug.png';

export const textAboutMe = [
    {
        shortIntro: "Software engineer specialized in .NET backend and interactive 3D/XR applications for industrial digitalization. Experienced in Unity (C#), and automation of 3D workflows, bridging immersive technologies with enterprise systems.",

        longIntro: [
            "I design and develop software solutions that integrate enterprise systems, real-world data, and interactive 3D/XR applications, making industrial processes more accurate, collaborative, and efficient.",
            "I currently work on Industry 4.0 projects that combine Unity (C#) with .NET backends and Python automation pipelines for 3D assets, gaining hands-on experience in transforming complex technologies into practical solutions for industrial use.",
            "With an MSc in Computer Science and earlier experience managing investment funds, I bring both strong technical expertise and an analytical mindset. I am eager to keep expanding my skills, collaborate across disciplines, and contribute to impactful digital transformation initiatives."
        ]
    }


]

export const portfolio = [
    {
        intro: "Projects in AR, VR, and Interactive 2D Development"
    }    
]

export const projects = [
    {
        title: "AR Escape Room",
        subtitle: "Human-Centric AR",
        description:
            "Exploratory AR project in collaboration with an association for people with visual impairments. Focused on usability, accessibility, and human-centric design in digital environments.",
        image: projectAREscapeRoomMainImage
    },
    {
        title: "Caius Adventures VR",
        subtitle: "VR Prototype",
        description:
            "Created an interactive VR experience using Unity and Blender. Gained hands-on experience in 3D asset workflows, performance optimization, and immersive interaction design.",
        image: projectCaiusAdventuresVRMainImage
    },
    {
        title: "Space Invaders - Crazy Ludi",
        subtitle: "2D Game Prototype",
        description:
            "Rebuilt Space Invaders in Java, integrating game mechanics, UI, and custom features. Early project demonstrating programming fundamentals and creativity.",
        image: projectSpaceInvadersCrazyLudiMainImage
    }
];

export const skills = [
    {
        languages: [
            {
                name: "C#",
                image: logoLanguageCSharp
            },
            {
                name: "Java",
                image: logoLanguageJava
            },
            {
                name: "Python",
                image: logoLanguagePython
            },
            {
                name: "SQL",
                image: logoLanguageSQL
            }
        ],
        technologies: [
            {
                name: "Unity",
                image: unityLogo
            },
            {
                name: "Blender",
                image: blenderLogo
            }
        ]
    }
];

export const socialLinks = [
    {
        name: "GitHub",
        image: githubLogo,
        url: "https://github.com/cmembrez"
    },
    {
        name: "LinkedIn",
        image: linkedInLogo,
        url: "https://www.linkedin.com/in/membrezcedric/"
    }
];