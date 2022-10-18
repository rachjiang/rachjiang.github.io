import React from 'react';
import './App.css';
import projects from './assets/projects';

function Projects() {
    return (
    <section id="projects">
        <h2 className="project-header font-bold font-mono">Some projects I've worked on</h2>
        <div>
            {projects.map(project => {
                return (
                <div className="project-container">
                    <div className="text-col">
                        <div>
                            <p className="font-bold">{project.title}</p><br></br>
                            <p>{project.description}</p><br></br>
                            <p>Contributions: {project.contribution}</p><br></br>
                            <p>{project.stack}</p>
                        </div>
                    </div>
                    <div className="img-col">
                        <div className="outer">
                            <div className="inner">
                                <img alt="project" src={require(`./assets/${project.image}`)} className="max-w-5xl"/>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    </section>
    )
}

export default Projects;