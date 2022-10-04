import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
    return (
    <nav id="navbar" className="buttons">
        <Link to="about" smooth={true} duration={800} className="py-3 px-8 mx-3 rounded">About
        </Link>
        <Link to="projects" smooth={true} duration={800} className="py-3 px-8 mx-3 rounded">Projects
        </Link>
        <Link to="resume" smooth={true} duration={800} className="py-3 px-8 mx-3 rounded">Resume
        </Link>
        <Link to="contact" smooth={true} duration={800} className="py-3 px-8 mx-3 rounded">Contact
        </Link>
    </nav>
    )
}

export default Navbar;