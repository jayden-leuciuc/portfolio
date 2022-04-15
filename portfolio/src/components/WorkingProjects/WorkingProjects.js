import React, { useState } from 'react';
import './WorkingProjects.scss';
import SliderData from './Data';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const WorkingProjects = () => {
  Aos.init();
  const [current, setCurrent] = useState(0);

  const length = SliderData.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  }

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  }

  function selectSlide(index) {
    setCurrent(index);
    console.log(current);
  }

  return (
    <div className='current-project-container'>
      <div className='button-container'>
        <AiOutlineArrowUp onClick={prevSlide} className='up-arrow' />

        <p
          className={
            current === 0
              ? 'carousel-control active-element'
              : 'carousel-control inactive-element'
          }
          onClick={() => {
            selectSlide(0);
          }}
        >
          Learning
        </p>

        <p
          className={
            current === 1
              ? 'carousel-control active-element'
              : 'carousel-control inactive-element'
          }
          onClick={() => {
            selectSlide(1);
          }}
        >
          Freelancing
        </p>

        <p
          className={
            current === 2
              ? 'carousel-control active-element'
              : 'carousel-control inactive-element'
          }
          onClick={() => {
            selectSlide(2);
          }}
        >
          Personal Projects
        </p>

        <AiOutlineArrowDown onClick={nextSlide} className='down-arrow' />
      </div>

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'active' : 'inactive'}
            key={index}
          >
            {index === current && (
              <div className='info-container' data-aos='fade-up'>
                <h1 className='info-title'>{slide.title}</h1>
                <p className='info-subtitle'>{slide.subtitle}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WorkingProjects;
