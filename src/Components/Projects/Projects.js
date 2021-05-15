import React from 'react';
import Card from '../Card/Card';
import { projectOne, projectTwo, projectThree, projectFour } from './Data';
import './Projects.scss';

function Projects() {
  return (
    <div className='projects-Header'>
      <h1 className='header'>&lt;Projects /&gt;</h1>
      <div className='projects-container'>
        <Card {...projectFour} />
        <Card {...projectThree} />
        <Card {...projectTwo} />
        <Card {...projectOne} />
      </div>
    </div>
  );
}

export default Projects;
