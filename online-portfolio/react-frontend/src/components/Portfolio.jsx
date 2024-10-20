import {portfolio, projects } from "../data";
export default function Portfolio() {
    return (
        <section id="portfolio">
            <div className="portfolio-header">
                <h1>Portfolio</h1>
                <p>{portfolio[0].intro}</p>
            </div>

            <div className="projects-container">
                {projects.map((project) => (
                    <a key={project.image} className="project">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h2>{project.subtitle}</h2>
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}