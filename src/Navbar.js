import React from 'react';
import './styles.css';
import { Link } from 'react-scroll';

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
        </div>
    </nav>
    )
}

export default Navbar;