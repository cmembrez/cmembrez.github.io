﻿import { skills, textAboutMe } from "../data";
export default function Home() {
    const aboutMeText = textAboutMe[0];
    const skillsLanguages = skills[0].languages;
    const skillsTechnologies = skills[0].technologies;

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
                    {skillsLanguages.map((language, index) => (
                        <div key={index} className="skill">
                            <img
                                src={language.image}
                                alt={language.name}
                                className="skill-image"
                            />
                        </div>
                    ))}
                </div>

                <div className="skills-list">
                    {skillsTechnologies.map((technology, index) => (
                        <div key={index} className="skill">
                            <img
                                src={technology.image}
                                alt={technology.name}
                                className="skill-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}