import React, { useState } from "react"
import Card from "../Card/Card"
import { projectArray } from "./Data"
import "./Project.scss"
import { StaticImage } from "gatsby-plugin-image"

const Projects = () => {
  const [projectArr, setProjectArr] = useState(projectArray)

  {
    /*const filterProjects = matchType => {
    console.log(projectArr)
    const filteredArray = projectArray.filter(
      project => project.projectType === matchType
    )
    setProjectArr(filteredArray)
  } */
  }

  return (
    <div className="projects-container">
      <h1 className="projects-header">My Work</h1>
      {/* <div className='button-container'>
        <button onClick={() => setProjectArr(projectArray)}>All</button>
        <button onClick={() => filterProjects('react')}>React</button>
        <button>Wordpress</button>
  <button>Email</button> 
      </div>
*/}
      <div className="image-container">
        <a>
          <div className="project">
            <div className="project-overlay">
              <div className="overlay-text">
                <h1 className="overlay-header">{projectArr[0].projectTitle}</h1>
                <p>{projectArr[0].projectType}</p>
              </div>
            </div>
            <StaticImage
              src={"../../images/coding.jpeg"}
              alt={projectArr[0].imgAlt}
              className="project-img"
              placeholder="none"
            />
          </div>
        </a>

        <a>
          <div className="project">
            <div className="project-overlay">
              <div className="overlay-text">
                <h1 className="overlay-header">{projectArr[1].projectTitle}</h1>
                <p>{projectArr[1].projectType}</p>
              </div>
            </div>
            <StaticImage
              src={"../../images/invest.jpeg"}
              alt={projectArr[1].imgAlt}
              className="project-img"
              placeholder="none"
            />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Projects
