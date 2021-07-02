import React, { useState } from 'react';
import Card from '../Card/Card';
import { projectArray } from './Data';

import './Project.scss';

const Projects = () => {
  const [projectArr, setProjectArr] = useState(projectArray);

  const filterProjects = (matchType) => {
    console.log(projectArr);
    const filteredArray = projectArray.filter(
      (project) => project.projectType === matchType
    );
    setProjectArr(filteredArray);
  };

  return (
    <div className='projects-container'>
      <h1 className='projects-header'>My Work</h1>
      <div className='button-container'>
        <button onClick={() => setProjectArr(projectArray)}>All</button>
        <button onClick={() => filterProjects('react')}>React</button>
        <button>Wordpress</button>
        <button>Email</button>
      </div>

      <div className='image-container'>
        {projectArr.map((project, index) => {
          return (
            <a key={index} href={project.liveLink}>
              <Card dataSrc={project} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
