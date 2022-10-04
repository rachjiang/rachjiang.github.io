import Header from './Header';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';

function App() {
  return (
  <div className="bg-parchment bg-cover">
    <Navbar />
    <Header />
    <About />
    <Projects />
    <Resume />
    <Contact />
    <button onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}>
      <svg><circle cx="50" cy="50" r="40" stroke="brown" stroke-width="4" fill="pink" /></svg>
    </button>
  </div>
  );
}

export default App;
