import React from 'react';
import './styles.css';
import portrait from './assets/images/portrait.png';
import pdf from './assets/Rachel_Jiang_Resume2022.pdf';

function About() {

    return(
        <section id="about">
            <div className="container bg-linen">
                <h2 data-aos="fade-right" data-aos-duration="3500" data-aos-delay="200">Get to know me!</h2>
                <img alt="headshot" src={portrait} />
                <div className="about-col">
                    <p data-aos="fade-down" data-aos-duration="3500" data-aos-delay="150">I'm a full stack developer with experience primarily in the <span className="font-semibold text-teal">JavaScript PERN stack</span>. As a graduate of <a className="italic hover:underline" href="https://www.gracehopper.com/" target="_blank" rel="noopener noreferrer">The Grace Hopper Program </a>, I've built <span className="font-semibold text-teal">web and mobile</span> applications by contributing to front and back ends with integration through <span className="font-semibold text-teal">relational & non-relational databases</span>. I enjoy <span className="italic">sharing ideas and absorbing knowledge</span> from fellow coders when <span className="font-semibold text-teal">pair-programming</span>. When I program independently, I find gratification in <span className="italic">creative problem-solving and learning</span> new technologies. Coming from a background in healthcare, I am strongly familiar with the life cycle of patient care during inpatient/outpatient visits. I've seen how accessibility to proper care can impact recovering patients. The empathy I've carried translates into the way I code. <span className="italic">Currently, I am seeking roles as a full stack developer.</span> Please reach out if you'd like to chat!</p>
                    <ul data-aos="fade-down" data-aos-duration="3500" data-aos-delay="750">
                        <li className="font-bold underline pb-3">Skills</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                        <li>React Native</li>
                        <li>Git</li><br></br>
                        <li className="font-bold border-2 rounded border-sapphire hover:bg-sky-200 text-center"><a href={pdf} target="_blank" rel="noopener noreferrer">Resume</a></li>
                    </ul>
                    <p data-aos="fade-down" data-aos-duration="3500" data-aos-delay="1450">When I'm not coding, some of my favorite activities are randomly belting out songs of many genres (including the ad-libs), smothering my <span className="underline text-teal"><span className="cat bg-gradient-to-r from-ruby via-fuscia to-lilac">cat</span></span> with clearly unwarranted attention, and sprawling out onto my yoga mat when the sun sets. On some days, certain periods of history randomly pique my interest and I'll spend hours reading about events during that time. As for hobbies, I love snowboarding, though I have yet to hit Black Diamond (one day!). I'm also a beginner in ceramics and have plans to open a membership at a pottery studio. More recently, I've been taking time to research blockchain and Web3 to understand its potential and impact on the future. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;
