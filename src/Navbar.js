import './App.css';

function Navbar() {
    return (
    <div className="buttons py-10 mx-auto font-mono text-white">
        <button className="font-bold bg-orange-700 hover:bg-yellow-600 py-3 px-8 mx-3 rounded">
            <a href="#about">About</a>
        </button>
        <button className="font-bold bg-orange-700 hover:bg-yellow-600 py-3 px-8 mx-3 rounded">
            <a href="#projects">Projects</a>
        </button>
        <button className="font-bold bg-orange-700 hover:bg-yellow-600 py-3 px-8 mx-3 rounded">
            <a href="#contact">Contact</a>
        </button>
    </div>
    )
}

export default Navbar;