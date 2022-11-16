import React from 'react';
import './App.css';
import portrait from './assets/portrait.jpeg'

function About() {
    return(
        <section id="about">
            <div className="container bg-snow">
                <h2>Get to know me!</h2>
                <img alt="headshot" src={portrait} />
                <div className="about-container">
                    <p>I'm a full stack developer with a primary focus on the JavaScript PERN stack. As a graduate of The Grace Hopper Program, I've built web and mobile applications by contributing to both front and back ends, with integration through relational and non-relational databases. I enjoy sharing ideas with and abosrbing knowledge from fellow coders when pair-programming. When I program independently, I find deep-satisfaction in creative problem-solving, and feel eager as I find myself in a deep hole of new technologies to test and explore.</p>
                    <ul>
                        <li className="font-bold underline pb-10">Skills</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                    </ul>
                    <p>When I'm not coding, some of my favorite activities are randomly belting out songs of many genres (including the ad-libs), smothering my cat with clearly unwarranted attention, and sprawling out onto my yoga mat when the sun sets.</p>
                </div>
            </div>
        </section>
    )
}

export default About;
