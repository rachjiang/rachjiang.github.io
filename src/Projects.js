import React from 'react';
import projects from './assets/projects';
import './styles.css';

function Projects() {
    return (
    <section id="projects">
        <div>
            <h2 className="project-header">Here's what I've built so far!</h2>
            {projects.map(project => {
                return (
                <div className="project-container">
                    <div data-aos="fade-right" data-aos-duration="3500" data-aos-delay="200" className="img-col">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <img alt="project" src={require(`./assets/images/${project.image}`)}/>
                        </a>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="3500" data-aos-delay="650" className="text-col">
                        <p className="sm:text-lg text-xl text-teal font-bold">{project.title}</p><br></br>
                        <p>{project.description}</p><br></br>
                        <p>Contributions: {project.contribution}</p><br></br>
                        <p className="pb-9">{project.stack}</p>
                        <a className="sm:text-sm px-6 py-2 mb-16 font-semibold bg-white border rounded-full border-sapphire hover:bg-blue hover:border-blue text-sapphire text-center" href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </div>
                </div>
                )
            })}
        </div>
    </section>
    )
}

export default Projects;