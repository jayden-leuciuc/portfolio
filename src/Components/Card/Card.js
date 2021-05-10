import React from 'react';
import './Card.scss';

function Project({
  projectTitle,
  projectDesc,
  imgSrc,
  imgAlt,
  githubLink,
  liveLink,
}) {
  return (
    <div className='project-container' data-aos='zoom-in'>
      <div className='card'>
        <h1 className='project-title'>{projectTitle}</h1>
        <div className='img-container'>
          <img src={imgSrc} alt={imgAlt} className='img' />
          <div className='buttonContainer'>
            <div className='text-container'>
              <p className='codeText'>Github Code</p>
              <p className='viewText'>View Project</p>
            </div>

            <a
              class='gitHubButton'
              href={githubLink}
              target='_blank'
              rel='noreferrer'
            ></a>

            <a
              class='sourceButton'
              href={liveLink}
              target='_blank'
              rel='noreferrer'
            ></a>
          </div>
        </div>

        <p className='projectDescription'>{projectDesc}</p>
      </div>
    </div>
  );
}

export default Project;
