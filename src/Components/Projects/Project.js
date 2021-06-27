import React from 'react';
import Card from '../Card/Card';
import { projectArray } from './Data';

import './Project.scss';

const Projects = () => {
  return (
    <div className='projects-container'>
      <h1 className='projects-header'>My Work</h1>
      <div className='image-container'>
        <Card dataSrc={projectArray[0]} />
        <Card dataSrc={projectArray[1]} />
        <Card dataSrc={projectArray[2]} />
        <Card dataSrc={projectArray[3]} />
      </div>
    </div>
  );
};

export default Projects;
