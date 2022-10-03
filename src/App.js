import './App.css';

function App() {
  return (
    <div className="bg-brown-png bg-cover">
      <div className="buttons py-10 mx-auto">
          <button className="text-white font-bold bg-yellow-700 hover:bg-green-600 py-3 px-8 mx-3 rounded">About Me</button>
          <button className="text-white font-bold bg-yellow-700 hover:bg-green-600 py-3 px-8 mx-3 rounded">Projects</button>
          <button className="text-white font-bold bg-yellow-700 hover:bg-green-600 py-3 px-8 mx-3 rounded">Contact</button>
      </div>
      <div className="container mx-auto bg-gradient-to-tr from-red-300 via-orange-200 rounded-xl p-8 m-10">
        <p className="text-2xl">Hi there, I'm</p>
        <h1 className="text-8xl py-5 font-bold">Rachel Jiang</h1>
        <p className="text-1xl my-10">enthusiastic problem solver && eager student && empathetic solutions.</p>
      </div>
    </div>
    );
}

export default App;
