import Header from './Header';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

function App() {
  return (
  <div className="bg-alabaster">
    <Navbar />
    <Header />
    <About />
    <Projects />
    <Contact />
  </div>
  );
} 

export default App;
