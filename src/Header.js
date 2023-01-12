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
          <p data-aos="slide-right" data-aos-duration="3500" data-aos-delay="200" className="sm:text-2xl text-8xl font-bold text-sapphire">Hi there!
          <span className="px-6 absolute bottom-0">
            <Lottie />
          </span>
          </p>
          <p data-aos="flip-up" data-aos-duration="3500" data-aos-delay="800"  className="sm:text-6xl text-8xl font-bold py-10 text-sapphire">My name is, <span className="name bg-gradient-to-r from-ruby via-fuscia to-teal">Rachel.</span></p>
          <p data-aos="zoom-out-down" data-aos-duration="3500" data-aos-delay="1400" className="sm:text-2xl text-5xl font-semibold text-teal pt-28">Full Stack Software Developer</p>
      </div>
    </section>
    );
}

export default Header;