import React from 'react';
import './Footer.scss';

import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
function Footer() {
  return (
    <div className='footer-container'>
      <div className='text-container'>
        <span>
          Site Created and Built by Jayden Leuciuc{' '}
          <span className='visible'> | </span>
        </span>
        <div className='social-icons'>
          <a href='https://twitter.com/leuciucjayden' className='icon'>
            <FaTwitter className=''></FaTwitter>
          </a>
          <a
            href='https://www.linkedin.com/in/jayden-leuciuc/'
            className='icon'
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a href='https://github.com/jayden-leuciuc' className='icon'>
            <FaGithub></FaGithub>
          </a>
          <a
            href='https://www.youtube.com/channel/UC_WqFBPs1QSnrYESK3hi9QQ'
            className='icon'
          >
            <FaYoutube></FaYoutube>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
