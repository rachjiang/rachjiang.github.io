import './App.css';

function Header() {
  return (
    <section id="header">
        <h1 className="container mx-auto font-mono p-8 m-10">
            <p className="text-3xl py-5">Hi there, my name is</p>
            <p className="text-9xl py-5 font-bold text-orange-700">Rachel Jiang</p>
            <p className="text-2xl my-10">enthusiastic problem solver && eager student && empathetic solutions.</p>
        </h1>
    </section>
    );
}

export default Header;