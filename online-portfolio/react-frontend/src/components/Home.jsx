import { skills } from "../data";
export default function Home() {
    return (
        <section id="home">
            <div className="header">
                <h1>Cédric Membrez</h1>
                <p>Software engineer currently focused on digital twin in an industrial context, with constant curiosity to apply my skills in other industries.</p>
            </div>

            <div className="about">
                <h1>About Me...</h1>
                <p>A mixed reality software engineer focusing on digital twin in an industrial context, with constant curiosity to apply my skills in other industries.</p>
                <p> During a MSc in computer science, with a specialization in advanced information processing,
                    I have been inspired by the potential of mixed reality and what it can unlock.
                    I wrote my MSc thesis on gamification and accessibility using augmented reality
                    to support the rehabilitation of people with visual impairment.
                </p>
                <p>
                    Through these studies, I have reconnected with a passion for computer science and video games.
                    It brought back memories from my childhood where I developed maps for Half-Life using
                    the Valve Hammer editor. But today, with the appropriate skills acquired,
                    I tackle new hardware and technologies with a purpose to bring the best out of mixed reality
                    to benefit the end user in multiple ways.
                </p>
                <p>
                    My initial career in financial investments helped me develop a rigorous work ethic
                    through an attention to details with complex data to make optimal decisions,
                    and a strong communication with interpersonal skills through presentations across Europe.
                </p>
            </div>

            <div className="skills">
                <h1>Skills</h1>
                <div className="skills-list">
                    {
                        skills.map(
                            (skill) => (
                                <div key={skill.name} className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                        <span className="title-font font-medium text-white">
                                            {skill.name}
                                        </span>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </section>
    );
}