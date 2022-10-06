import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import pdf from './assets/Rachel_Jiang_Resume2022.pdf'

function Navbar() {

    return (
    <nav id="navbar" className="buttons">
        <Link to="about" smooth={true} duration={500} className="link py-3 px-8 mx-3 rounded">About
        </Link>
        <Link to="projects" smooth={true} duration={500} className="link py-3 px-8 mx-3 rounded">Projects
        </Link>
        <a href={pdf} target="_blank" rel="noopener noreferrer" className="link py-3 px-8 mx-3 rounded">Resume</a>
        <Link to="contact" smooth={true} duration={500} className="link py-3 px-8 mx-3 rounded">Contact
        </Link>
    </nav>
    )
}

export default Navbar;