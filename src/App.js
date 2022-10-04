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
    <Projects />
    <About />
  </div>
  );
}

export default App;
