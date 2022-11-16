import './App.css';

function Header() {
  return (
    <section id="header" className="bg-watercolor">
            <h1 className="container">
                <p className="text-4xl font-mono py-10">Hi there<span>, my name is</span></p>
                <p className="text-8xl font-bold py-10 text-sapphire">Rachel Jiang</p>
                <p className="text-3xl text-teal font-mono py-10">Full Stack Software Developer</p>
            </h1>
    </section>
    );
}

export default Header;