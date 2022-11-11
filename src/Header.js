import './App.css';
// import Navbar from './Navbar';

function Header() {
  return (
    <section id="header" className="bg-watercolor border-b-4 border-blue py-8">
            <h1 className="container">
                <p className="text-3xl py-5">Hi there<span>, my name is</span></p>
                <p className="text-8xl text-bold py-10 text-blue">Rachel Jiang</p>
                <p className="text-2xl py-5">Full Stack Software Developer</p>
            </h1>
    </section>
    );
}

export default Header;