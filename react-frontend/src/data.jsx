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
        shortIntro: "Junior software engineer with hands-on experience in C#, Python, Java and SQL, dedicated to continuous learning and improvement. I am driven to contribute to innovative projects while enhancing my skills in a collaborative environment.",
        longIntro: [
            "I possess a growing foundation in various programming languages and technologies, fueled by a passion for problem-solving. Despite being early in my software engineering career, I have gained practical experience that enables me to contribute effectively across various industries.",
            "Currently, I am working on Industry 4.0 projects, using Python to automate CAD workflow processes and C# to build AR/VR applications. My curiosity extends into areas like cloud computing, big data, and machine learning, and I am excited to further explore these technologies to deliver impactful solutions.",
            "With an MSc in Computer Science and prior experience in finance, I bring a blend of analytical thinking and technical skills to every project. I am eager to continue developing my expertise, collaborating with diverse teams, and applying innovative technologies to solve complex problems."
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
        subtitle: "Augmented Reality",
        description:
            "Explore the use of augmented reality, Microsoft HoloLens 2, with people with visual impairments.",
        image: projectAREscapeRoomMainImage
    },
    {
        title: "Caius Adventures VR",
        subtitle: "Virtual Reality",
        description:
            "My very first VR video game using a Quest 2.",
        image: projectCaiusAdventuresVRMainImage
    },
    {
        title: "Space Invaders - Crazy Ludi",
        subtitle: "2D Java Game",
        description:
            "A version of Space Invaders using Java with a hint to my passion for piano.",
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