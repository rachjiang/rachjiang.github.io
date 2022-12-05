import './styles.css';

function Header() {
  return (
    <section id="header">
            <h1 className="container">
                <p className="sm:text-2xl text-3xl font-mono py-10">Hi there, my name is</p>
                <p className="sm:text-6xl text-8xl font-bold py-10 text-sapphire">Rachel Jiang</p>
                <p className="sm:text-2xl text-3xl text-teal font-mono py-10">Full Stack Software Developer</p>     
            </h1>
    </section>
    );
}

export default Header;