import React from 'react';
import './styles.css';
// import portrait from './assets/images/portrait.png';
import pdf from './assets/Rachel_Jiang_Resume.pdf';

function About() {

    return(
        <section id="about">
            <div className="container bg-linen">
                <div className="about-content">
                    <p data-aos="flip-down" data-aos-duration="3500" data-aos-delay="350">I'm a full stack developer with experience primarily in the <span className="highlight">JavaScript PERN stack</span>. As a graduate of <a className="highlight hover:underline hover:text-lilac" href="https://www.gracehopper.com/programs/coding-bootcamp" target="_blank" rel="noopener noreferrer">The Grace Hopper Program</a>, I've built <span className="highlight">web and mobile</span> applications by contributing to front and back ends with integration through <span className="highlight">relational & non-relational databases</span>. I enjoy <span>sharing ideas and absorbing knowledge</span> from fellow coders when <span className="highlight">pair-programming</span>. When I program independently, I find gratification in <span className="highlight">creative problem-solving and learning</span> new technologies. Coming from a background in healthcare, I am strongly familiar with the life cycle of patient care during inpatient/outpatient visits. I've seen how accessibility to proper care can impact recovering patients. The empathy I've carried translates into the way I code. <span className="highlight">Currently, I am seeking new opportunities.</span> Please reach out if you'd like to chat!</p>
                </div>
                <div className="skills" data-aos="flip-down" data-aos-duration="3500" data-aos-delay="500">
                    <p className="sm:text-xl font-bold text-2xl pt-16">Skills</p>
                    <div className="skills-items pt-8 pb-16">
                        <span>JavaScript</span>
                        <span>React</span>
                        <span>Redux</span>
                        <span>Node.js</span>
                        <span>Express</span>
                        <span>PostgreSQL</span>
                        <span>React Native</span>
                        <span>Git</span>
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>Python3</span>
                    </div>
                    <button className="sm:text-sm px-6 py-2 mb-16 font-semibold border-4 bg-sapphire rounded-full border-sapphire hover:bg-blue hover:border-blue text-white text-center"><a href={pdf} target="_blank" rel="noopener noreferrer">Resume</a></button>
                </div>
                <div className="about-content">
                    <p data-aos="flip-down" data-aos-duration="3500" data-aos-delay="350">When I'm not coding, some of my favorite activities are randomly belting out songs of many genres (including the ad-libs), smothering my <span className="underline text-teal"><span className="cat bg-gradient-to-r from-ruby via-fuscia to-lilac">cat</span></span> with clearly unwarranted attention, and sprawling out onto my yoga mat when the sun sets. On some days, certain periods of history randomly pique my interest and I'll spend hours reading about events during that time. As for hobbies, I love snowboarding, though I have yet to hit Black Diamond (one day!). I'm also a beginner in ceramics and have plans to open a membership at a pottery studio. More recently, I've been taking time to research blockchain and Web3 to understand its potential and impact on the future. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;
