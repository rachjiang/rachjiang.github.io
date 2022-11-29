import React from 'react';
import './styles.css';
import portrait from './assets/portrait.png'

function About() {
    return(
        <section id="about">
            <div className="container bg-linen">
                <h2>Get to know me!</h2>
                <img alt="headshot" src={portrait} />
                <div className="about-col">
                    <p>I'm a full stack developer with experience primarily in the JavaScript PERN stack. As a graduate of The Grace Hopper Program, I've built web and mobile applications by contributing to front and back ends with integration through relational/non-relational databases. I enjoy sharing ideas and absorbing knowledge from fellow coders when pair-programming. When I program independently, I find gratification in creative problem-solving and learning new technologies. Coming from a background in healthcare, I am strongly familiar with the life cycle of patient care during inpatient/outpatient visits. I've seen how accessibliity to proper care can impact recovering patients. The empathy I've carried translates into the way I code. Currently, I am seeking roles as a full stack developer. Please reach out if you'd like to chat!</p>
                    <ul>
                        <li className="font-bold underline pb-3">Skills</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                        <li>React Native</li>
                        <li>Git</li>
                    </ul>
                    <p>When I'm not coding, some of my favorite activities are randomly belting out songs of many genres (including the ad-libs), smothering my cat with clearly unwarranted attention, and sprawling out onto my yoga mat when the sun sets. On some days, certain periods of history randomly pique my interest and I'll spend hours reading about events during that time. As for hobbies, I love snowboarding, though I have yet to hit Black Diamond (one day!). I'm also a beginner in ceramics and have plans to open a membership at a pottery studio. More recently, I've been taking time to research blockchain and Web3 to understand its potential and impact on the future. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;
