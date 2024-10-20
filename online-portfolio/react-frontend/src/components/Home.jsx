import { skills, textAboutMe } from "../data";
export default function Home() {
    const aboutMeText = textAboutMe[0];

    return (
        <section id="home">
            <div className="header">
                <h1>Cédric Membrez</h1>
                <p>{aboutMeText.shortIntro}</p>
            </div>

            <div className="about">
                <h1>About Me...</h1>
                {aboutMeText.longIntro.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <div className="skills">
                <h1>Skills</h1>
                <div className="skills-list">
                    {skills.map((skill) => (
                        <div key={skill.name} className="skill">
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}