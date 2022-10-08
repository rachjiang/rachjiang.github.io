import './App.css';

function Header() {
  return (
    <section id="header">
        <h1 className="container mx-auto font-mono">
            <p className="text-3xl py-5">Welcome! My name is</p>
            <p className="text-8xl py-5 font-bold text-orange-700">Rachel Jiang</p>
            <p className="text-2xl py-5">Full Stack Software Developer</p>
        </h1>
    </section>
    );
}

export default Header;