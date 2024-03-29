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
          <p data-aos="slide-right" data-aos-duration="3500" data-aos-delay="200" className="sm:text-5xl text-8xl font-semibold text-sapphire">Hi there!
          <span className="animation">
            <Lottie />
          </span>
          </p>
          <p data-aos="flip-up" data-aos-duration="3500" data-aos-delay="800"  className="sm:text-5xl text-8xl font-semibold py-10 text-sapphire">My name is, <span className="name bg-gradient-to-r from-ruby via-fuscia to-teal">Rachel.</span></p>
          <p data-aos="zoom-out-down" data-aos-duration="3500" data-aos-delay="1400" className="sm:text-2xl text-5xl font-medium text-teal pt-28">Full Stack Software Engineer</p>
      </div>
    </section>
    );
}

export default Header;