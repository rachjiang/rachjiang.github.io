import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';

function App() {
  return (
  <div className="bg-parchment bg-cover">
    <Navbar />
    <Header />
    <About />
    <Projects />
    <button onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}>Scroll To Top</button>
  </div>
  );
}

export default App;
