// import images
import projectAREscapeRoomMainImage from './assets/ar-escape-room/work-ar-escape-room.jpg';
import projectCaiusAdventuresVRMainImage from './assets/caius-adventures-vr/Dungeon1Boss.PNG';
import projectSpaceInvadersCrazyLudiMainImage from './assets/space-invaders/work-space-invaders-crazy-ludi.PNG';
import logoLanguageCSharp from './assets/skills/c-sharp-c-seeklogo.svg';
import logoLanguageJava from './assets/skills/java-4-logo-svgrepo-com.svg';
import logoLanguagePython from './assets/skills/python-logo-only.png';
import logoLanguageSQL from './assets/skills/sql-seeklogo.svg';
import logoLanguageCpp from './assets/skills/c-seeklogo.png';

// Import technology images
import unityLogo from './assets/skills/U_Cube_1C_White.png';
import blenderLogo from './assets/skills/blender_icon_1024x1024.png';
import photoshopLogo from './assets/skills/Photoshop_2020.svg';
import unrealEngineLogo from './assets/skills/UE-Icon-2023-White.png';

// Import social link images
import githubLogo from './assets/socialLinks/github-mark-white.png';
import linkedInLogo from './assets/socialLinks/LI-In-Bug.png';

export const textAboutMe = [
    {
        shortIntro: "I'm a software engineer with experience across various languages and technologies (1+ years in C#, 1 year in Java and MySQL, 3 years in R and VBA).",
        longIntro: [
            "Over the last year, I have focused on Industry 4.0 and digital transformation, working across the pipeline from CAD models to AR / VR applications.",
            "I also have a solid foundation in cloud computing, big data, machine learning, and IoT.",
            "My broad skill set allows me to tackle challenges across diverse industries, including finance and technology, where I can leverage data - driven solutions and innovative technologies."
        ]
    }
]

export const portfolio = [
    {
        intro: "My projects in augmented reality (AR), virtual reality (VR) and 2D."
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
            },
            {
                name: "C/C++",
                image: logoLanguageCpp
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
            },
            {
                name: "Photoshop",
                image: photoshopLogo
            },
            {
                name: "Unreal Engine",
                image: unrealEngineLogo
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