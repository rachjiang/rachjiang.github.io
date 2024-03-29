import React from 'react';
import './styles.css';
import { Link } from 'react-scroll';
import pdf from './assets/Rachel_Jiang_Resume.pdf'

function Navbar() {
    return (
    <nav id="navbar" className="nav">
        <div data-aos="fade-down" data-aos-duration="3000" to="about">
            <Link to="about" smooth={true} duration={500}>About
            </Link>
            <Link to="projects" smooth={true} duration={500} >Projects
            </Link>
            <Link to="contact" smooth={true} duration={500}>Contact
            </Link>
            <a href={pdf} target="_blank" rel="noopener noreferrer" >Resume</a>
        </div>
    </nav>
    )
}

export default Navbar;