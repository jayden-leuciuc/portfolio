import React from 'react';
import './About.scss';
import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaSass,
  FaReact,
  FaGitAlt,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { GrGraphQl } from 'react-icons/gr';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  AOS.init();
  return (
    <div id='aboutId'>
      <div className='about-container'>
        <div className='text-container'>
          <h1 data-aos='fade-right'>
            About<span>_</span>
          </h1>
          <div className='p-container'>
            <p>
              My name is Jayden and I am currently a computer science student at
              the University of Tennessee. However, I started learning by
              building custom projects on my own. My creative outlet is
              developing clean, responsive websites. I mainly focus on front-end
              web development, but I am comfortable with the backend
            </p>
            <br />
            <p></p>
            <br />
            <p>
              If you would like to contact me:{' '}
              <span>
                <a href='mailto: leuciucjayden@gmail.com'>
                  leuciucjayden@gmail.com
                </a>
              </span>
            </p>
            <p>
              Resume:{' '}
              <span>
                <a
                  href='\media\Leuciuc Jayden Resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Leuciuc, Jayden Resume 2022
                </a>
              </span>
            </p>
          </div>
          <h6>Technologies I use:</h6>
          <div className='icons'>
            <div className='hmtlDiv'>
              <FaHtml5 className='iconPic' />
              <p className='iconText'>Html5</p>
            </div>
            <div className='cssDiv'>
              <FaCss3 className='iconPic' />
              <p className='iconText'>Css3</p>
            </div>
            <div className='nodeDiv'>
              <FaNodeJs className='iconPic' />
              <p className='iconText'>Node.js</p>
            </div>
            <div className='sassDiv'>
              <FaSass className='iconPic' />
              <p className='iconText'>Sass</p>
            </div>
            <div className='reactDiv'>
              <FaReact className='iconPic' />
              <p className='iconText'>React.js</p>
            </div>
            <div className='mongoDiv'>
              <DiMongodb className='iconPic' />
              <p className='iconText'>MongoDB</p>
            </div>
            <div className='graphQLDiv'>
              <GrGraphQl className='iconPic' />
              <p className='iconText'>GraphQL</p>
            </div>
            <div className='gitDiv'>
              <FaGitAlt className='iconPic' />
              <p className='iconText'>Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
