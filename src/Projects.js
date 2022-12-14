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
                    <div data-aos="flip-right" data-aos-duration="3500" data-aos-delay="300" className="img-col">
                        <a href={project.github}>
                            <img alt="project" src={require(`./assets/${project.image}`)}/>
                        </a>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="3500" data-aos-delay="900" className="text-col">
                        <p className="text-xl text-lilac font-bold">{project.title}</p><br></br>
                        <p>{project.description}</p><br></br>
                        <p>Contributions: {project.contribution}</p><br></br>
                        <p className="pb-5">{project.stack}</p>
                        <a href={project.github}>View Github</a>
                    </div>
                </div>
                )
            })}
        </div>
    </section>
    )
}

export default Projects;