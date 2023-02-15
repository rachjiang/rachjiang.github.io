import React from 'react';
import './styles.css';
import pdf from './assets/Rachel_Jiang_Resume.pdf';

function About() {

    return(
        <section id="about">
            <div className="container bg-linen">
                <div className="about-content">
                    <p data-aos="flip-down" data-aos-duration="3500" data-aos-delay="350">I'm a full stack developer with experience primarily in the <span className="highlight">JavaScript PERN stack</span>. As a graduate of <a className="highlight hover:underline hover:text-lilac" href="https://www.gracehopper.com/programs/coding-bootcamp" target="_blank" rel="noopener noreferrer">The Grace Hopper Program</a>, I've built <span className="highlight">web and mobile</span> applications by contributing to front and back end development with integration through <span className="highlight">relational & non-relational databases</span>. I enjoy <span>exchanging ideas and learning</span> from my peers when <span className="highlight">pair-programming</span>. When I program independently, I find gratification in <span className="highlight">creative problem-solving</span> and exploring new technologies. As a former radiographer at a leading trauma center, I am adaptable in high-pressure situations and thrive in fast-paced environments. I am eager to apply my skills and experience to make meaningful contributions in the software industry.<span className="highlight"> Currently, I am seeking new opportunities.</span> If you are interested in connecting, I would love to hear from you!</p>
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
                        <span>Python</span>
                    </div>
                    <button className="sm:text-sm px-6 py-2 mb-16 font-semibold border-4 bg-sapphire rounded-full border-sapphire hover:bg-blue hover:border-blue text-white text-center"><a href={pdf} target="_blank" rel="noopener noreferrer">Resume</a></button>
                </div>
                <div className="about-content">
                    <p data-aos="flip-down" data-aos-duration="3500" data-aos-delay="350">When I'm not immersed in coding, I'm randomly belting out songs of many genres (including the ad-libs, of course), smothering my <span className="underline text-teal"><span className="cat bg-gradient-to-r from-ruby via-fuscia to-lilac">cat</span></span> with clearly unwarranted attention, and sprawling out onto my yoga mat when the sun sets. On some days, I find myself randomly drawn to various periods of history, spending hours engrossed in the fascinating events that occurred during those times. As for hobbies, I love snowboarding, though I have yet to hit Black Diamond (one day!). I'm also a beginner in ceramics and have plans to open a membership at a pottery studio.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;
