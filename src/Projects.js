import React from 'react';
import projects from './assets/projects';
import './App.css';

function Projects() {
    return (
    <section id="projects">
        <div>
            <h2 className="project-header">Projects</h2>
            {projects.map(project => {
                return (
                <div className="project-container">
                    <div className="img-col">
                        <a href={project.github}>
                            <img alt="project" src={require(`./assets/${project.image}`)}/>
                        </a>
                    </div>
                    <div className="text-col">
                        <p className="text-2xl text-lilac font-bold">{project.title}</p><br></br>
                        <p>{project.description}</p><br></br>
                        <p>Contributions: {project.contribution}</p><br></br>
                        <p className="pb-5">{project.stack}</p>
                        <a href={project.github}>View project</a>
                    </div>
                </div>
                )
            })}
        </div>
    </section>
    )
}

export default Projects;