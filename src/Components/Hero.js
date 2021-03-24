import React from 'react';
import './Hero.scss';
import { AiOutlineArrowDown } from 'react-icons/ai';
import './About';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  AOS.init();
  const scrollToAbout = () => {
    document.querySelector('#aboutId').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className='hero-container'>
      <div className='text-container'>
        <h1
          className='intro'
          data-aos='slide-right'
          data-aos-delay='00'
          data-aos-duration='000'
        >
          Hi, i'm
        </h1>
        <h1 className='name' data-aos='fade-up'>
          Jayden Leuciuc
        </h1>
        <p>Self-taught web developer</p>
      </div>
      <div className='icon-container'>
        <AiOutlineArrowDown className='iconArrow' onClick={scrollToAbout} />
      </div>
    </div>
  );
}

export default Hero;
