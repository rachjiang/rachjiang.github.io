import Navbar from './Navbar';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

function App() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
  <div className="App">
    <Navbar />
    <Header />
    <About />
    <Projects />
    <Contact />
  </div>
  );
} 

export default App;
