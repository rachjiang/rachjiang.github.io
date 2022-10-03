import './App.css';

function Header() {
  return (
    <div className="container mx-auto font-mono bg-gradient-to-tr from-yellow-00 via-orange-200 rounded-xl p-8 m-10">
        <h1>
            <p className="text-2xl py-5">Hi there, my name is</p>
            <p className="text-8xl py-5 font-bold">Rachel Jiang</p>
            <p className="text-1xl my-10">enthusiastic problem solver && eager student && empathetic solutions.</p>
        </h1>
    </div>
    );
}

export default Header;