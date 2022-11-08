import './App.css';
import Navbar from './Navbar';

function Header() {
  return (
    <section id="header" className="bg-wildflower bg-opacity-10">
        <Navbar />
            <h1 className="container mx-auto font-mono">
                <p className="text-3xl py-5">Hi there, my name is</p>
                <p className="text-8xl py-5 font-bold text-blue">Rachel Jiang</p>
                <p className="text-2xl py-5">Full Stack Software Developer</p>
            </h1>
    </section>
    );
}

export default Header;