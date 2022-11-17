import React from 'react';
import './App.css';
import { Link } from 'react-scroll';
import pdf from './assets/Rachel_Jiang_Resume2022.pdf'

function Navbar() {
    return (
    <nav id="navbar" className="nav">
        <Link to="about" smooth={true} duration={500}>About
        </Link>
        <Link to="projects" smooth={true} duration={500} >Projects
        </Link>
        <a href={pdf} target="_blank" rel="noopener noreferrer" >Resume</a>
        <Link to="contact" smooth={true} duration={500}>Contact
        </Link>
    </nav>
    )
}

export default Navbar;