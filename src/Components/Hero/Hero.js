import React from 'react';
import './Hero.scss';
import '../About/About';
import { AiOutlineArrowDown } from 'react-icons/ai';
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
        <h1 className='hero-intro'>Hi, I'm</h1>
        <h1 className='hero-name'>Jayden Leuciuc</h1>
        <p className='hero-description'>Self-taught Web Developer</p>
      </div>
      <div className='icon-container'>
        <AiOutlineArrowDown className='iconArrow' onClick={scrollToAbout} />
      </div>
    </div>
  );
}

export default Hero;
