import React from 'react';
import './App.css';
import { Link } from 'react-scroll';
import pdf from './assets/Rachel_Jiang_Resume2022.pdf'

function Navbar() {
    return (
    <nav id="navbar" className="nav">
        <Link to="about" smooth={true} duration={500} className="rounded">About
        </Link>
        <Link to="projects" smooth={true} duration={500} className="rounded">Projects
        </Link>
        <a href={pdf} target="_blank" rel="noopener noreferrer" className="rounded">Resume</a>
        <Link to="contact" smooth={true} duration={500} className="rounded">Contact
        </Link>
    </nav>
    )
}

export default Navbar;