import React from 'react';
import './App.css';
import projects from './assets/projects';

function Projects() {
    return (
    <section id="projects" className="container mx-auto font-mono">
        <h2 className="text-4xl font-bold pb-10">Some projects I've worked on</h2>
        <ul>
            {projects.map(project => {
                return (
                <div>        
                    <li className="text-left font-bold mx-4 pt-10">{project.title}</li>
                    <li className="text-base">{project.description}</li>
                    <div className="outer">
                        <div className="inner">
                            <img alt="project" src={require(`./assets/${project.image}`)} className="pt-10 pb-10 max-w-5xl"/>
                        </div>
                    </div>
                    <li className="text-base">Contributions: {project.contribution}</li>
                    <li className="text-sm pb-10">{project.stack}</li>
                </div> 
                )
            })}
        </ul>
    </section>
    )
}

export default Projects;