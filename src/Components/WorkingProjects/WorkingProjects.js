import React, { useState } from 'react';
import './WorkingProjects.scss';
import SliderData from './Data';

const WorkingProjects = () => {
  const [current, setCurrent] = useState(0);

  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className='current-project-container' data-aos='fade-up'>
      <div className='left-container'>
        <h1>What i'm currently working on:</h1>
        <p>Inclues current projects</p>
      </div>
      <div className='right-container'>
        <button className='left-arrow' onClick={prevSlide}>
          &lt;
        </button>

        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'active' : 'inactive'}
              key={index}
            >
              {index === current && (
                <div className='info-container'>
                  <img
                    src={slide.image}
                    alt={slide.altText}
                    className='info-img'
                  />
                  <h1 className='info-title'>{slide.title}</h1>
                  <p className='info-subtitle'>{slide.subtitle}</p>
                </div>
              )}
            </div>
          );
        })}
        <button className='right-arrow' onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default WorkingProjects;
