import './App.css';

function Header() {
  return (
    <section id="header">
        <h1 className="container mx-auto font-mono p-8">
            <p className="text-3xl py-5">Welcome! My name is</p>
            <p className="text-8xl py-5 font-bold text-orange-700">Rachel Jiang</p>
            <p className="text-2xl my-10">Full Stack Software Developer</p>
        </h1>
    </section>
    );
}

export default Header;