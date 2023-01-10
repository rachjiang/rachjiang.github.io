import './styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Lottie from './LottieControl';

function Header() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: function() {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
      }
    });
  }, []);

  return (
    <section id="header">
      <div className="container">
        <p data-aos="slide-right" data-aos-duration="3500" data-aos-delay="200" className="sm:text-2xl text-3xl font-mono py-10">Hi there, my name is</p>
        <p data-aos="slide-left" data-aos-duration="3500" data-aos-delay="800"  className="sm:text-6xl text-8xl font-bold py-10 text-sapphire">Rachel Jiang</p>
        <p data-aos="slide-right" data-aos-duration="3500" data-aos-delay="1400" className="sm:text-2xl text-3xl text-teal font-mono py-10">Full Stack Software Developer</p>     
        </div>
    </section>
    );
}

export default Header;