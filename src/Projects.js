import React from 'react';
import projects from './assets/projects';
import './styles.css';

function Projects() {
    return (
    <section id="projects">
        <div>
            <h2 className="project-header">Projects</h2>
            {projects.map(project => {
                return (
                <div className="project-container">
                    <div data-aos="fade-right" data-aos-duration="3500" data-aos-delay="200" className="img-col">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <img alt="project" src={require(`./assets/images/${project.image}`)}/>
                        </a>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="3500" data-aos-delay="650" className="text-col">
                        <p className="sm:text-lg text-xl text-lilac font-bold">{project.title}</p><br></br>
                        <p>{project.description}</p><br></br>
                        <p>Contributions: {project.contribution}</p><br></br>
                        <p className="pb-5">{project.stack}</p>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">View Github</a>
                    </div>
                </div>
                )
            })}
        </div>
    </section>
    )
}

export default Projects;