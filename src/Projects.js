import React from 'react';
import './App.css';
import projects from './assets/projects';

function Projects() {
    return (
    <section id="projects" className="container mx-auto font-mono text-left">
        <h2 className="text-5xl font-bold">Some projects I've worked on</h2>
        <ul>
            {projects.map(project => {
                return (
                <div>        
                    <li>{project.title}</li>
                    <li className="text-base">{project.description}</li>
                    <li className="text-base">Contributions: {project.contribution}</li>
                    <li className="text-sm">{project.stack}</li>
                    <img alt="project" src={project.image}/>
                    <li>{'\n'}</li>
                </div> 
                )
            })}
        </ul>
    </section>
    )
}

export default Projects;