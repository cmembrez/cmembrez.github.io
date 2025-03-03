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
        shortIntro: "Software engineer with hands-on experience in C#/.Net, Python, Java and SQL, dedicated to continuous learning and improvement. I am driven to contribute to innovative projects while enhancing my skills in a collaborative environment.",
        longIntro: [
            "I possess a growing foundation in various programming languages and technologies, fueled by a passion for problem-solving. I have gained practical experience that enables me to contribute effectively across various industries.",
            "Currently, I am working on Industry 4.0 projects, digital transformation, using Python to automate 3D data workflow processes and C# to build applications in Unity (.Net Core). My curiosity extends into areas like cloud computing, big data, and machine learning, and I am excited to further explore these technologies to deliver impactful solutions.",
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
            "Conducted an exploratory study in collaboration with an association for people with visual impairments. Designed and implemented gamified tasks using augmented reality to assess usability and accessibility.",
        image: projectAREscapeRoomMainImage
    },
    {
        title: "Caius Adventures VR",
        subtitle: "Virtual Reality",
        description:
            "Developed a low-poly virtual reality adventure game using Unity and Blender. Created all assets and textures, resulting in an immersive gaming experience.",
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