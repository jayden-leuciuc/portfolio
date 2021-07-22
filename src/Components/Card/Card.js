import React from 'react';
import './Card.scss';

function Card({ dataSrc }) {
  const { projectTitle, imgSrc, imgAlt, projectType } = dataSrc;
  return (
    <div className='project'>
      <div className='project-overlay'>
        <div className='overlay-text'>
          <h1 className='overlay-header'>{projectTitle}</h1>
          <p>{projectType}</p>
        </div>
      </div>
      <img className='project-img' src={imgSrc} alt={imgAlt} />
    </div>
  );
}

export default Card;
