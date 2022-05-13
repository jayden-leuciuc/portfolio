import React, { useState } from "react"
import { projectArray } from "./Data"
import "./Project.scss"
import { StaticImage } from "gatsby-plugin-image"

const Projects = () => {
  const [projectArr] = useState(projectArray)

  /*const filterProjects = matchType => {
    console.log(projectArr)
    const filteredArray = projectArray.filter(
      project => project.projectType === matchType
    )
    setProjectArr(filteredArray)
  } */

  return (
    <div id="projects">
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
          <a href={projectArr[4].liveLink}>
            <div className="project">
              <div className="project-overlay">
                <div className="overlay-text">
                  <h1 className="overlay-header">
                    {projectArr[4].projectTitle}
                  </h1>
                  <p>{projectArr[4].projectType}</p>
                </div>
              </div>
              <StaticImage
                src={"../../images/miningstats.PNG"}
                alt={projectArr[4].imgAlt}
                className="project-img"
                placeholder="none"
              />
            </div>
          </a>

          <a href={projectArr[5].liveLink}>
            <div className="project">
              <div className="project-overlay">
                <div className="overlay-text">
                  <h1 className="overlay-header">
                    {projectArr[5].projectTitle}
                  </h1>
                  <p>{projectArr[5].projectType}</p>
                </div>
              </div>
              <StaticImage
                src={"../../images/onlinestore.PNG"}
                alt={projectArr[5].imgAlt}
                className="project-img"
                placeholder="none"
              />
            </div>
          </a>

          <a href={projectArr[3].liveLink}>
            <div className="project">
              <div className="project-overlay">
                <div className="overlay-text">
                  <h1 className="overlay-header">
                    {projectArr[3].projectTitle}
                  </h1>
                  <p>{projectArr[3].projectType}</p>
                </div>
              </div>
              <StaticImage
                src={"../../images/github-pages-sc.JPG"}
                alt={projectArr[3].imgAlt}
                className="project-img"
                placeholder="none"
              />
            </div>
          </a>

          <a href={projectArr[2].liveLink}>
            <div className="project">
              <div className="project-overlay">
                <div className="overlay-text">
                  <h1 className="overlay-header">
                    {projectArr[2].projectTitle}
                  </h1>
                  <p>{projectArr[2].projectType}</p>
                </div>
              </div>
              <StaticImage
                src={"../../images/covid19sc.JPG"}
                alt={projectArr[2].imgAlt}
                className="project-img"
                placeholder="none"
              />
            </div>
          </a>

          <a href={projectArr[0].liveLink}>
            <div className="project">
              <div className="project-overlay">
                <div className="overlay-text">
                  <h1 className="overlay-header">
                    {projectArr[0].projectTitle}
                  </h1>
                  <p>{projectArr[0].projectType}</p>
                </div>
              </div>
              <StaticImage
                src={"../../images/password-project-sc.png"}
                alt={projectArr[0].imgAlt}
                className="project-img"
                placeholder="none"
              />
            </div>
          </a>

          <a href={projectArr[1].liveLink}>
            <div className="project">
              <div className="project-overlay">
                <div className="overlay-text">
                  <h1 className="overlay-header">
                    {projectArr[1].projectTitle}
                  </h1>
                  <p>{projectArr[1].projectType}</p>
                </div>
              </div>
              <StaticImage
                src={"../../images/cnstrct-sc.png"}
                alt={projectArr[1].imgAlt}
                className="project-img"
                placeholder="none"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
