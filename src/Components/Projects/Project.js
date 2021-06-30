import React from 'react';
import Card from '../Card/Card';
import { projectArray } from './Data';

import './Project.scss';

const Projects = () => {
  return (
    <div className='projects-container'>
      <h1 className='projects-header'>My Work</h1>
      <div className='image-container'>
        <a href={projectArray[0].liveLink}>
          <Card dataSrc={projectArray[0]} />
        </a>
        <a href={projectArray[1].liveLink}>
          <Card dataSrc={projectArray[1]} />
        </a>
        <a href={projectArray[2].liveLink}>
          <Card dataSrc={projectArray[2]} />
        </a>
        <a href={projectArray[3].liveLink}>
          <Card dataSrc={projectArray[3]} />
        </a>
      </div>
    </div>
  );
};

export default Projects;
