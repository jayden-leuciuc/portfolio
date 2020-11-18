import React from 'react'
import './Card.scss'


function Project({
    projectTitle,
    projectDesc,
    imgSrc,
    imgAlt,
    githubLink,
    liveLink,
}) {
    

    return (
        <div className="project-container">
            <div className="card">
            <h1 className="projectTitle">{ projectTitle}</h1> 
            <a href={liveLink} target="_blank" rel="noreferrer"><img src={imgSrc} alt={imgAlt} className="img"/></a>
            <div className="buttonContainer">
                <div className="gitHubButton">
                <a class="link" href={githubLink} target="_blank" rel="noreferrer">
                    <p className="gitText">Github Code</p>
                </a>
                </div>
                <div className="sourceButton">
                <a class="link" href={liveLink} target="_blank" rel="noreferrer">
                    <p className="sourceText">View Project</p>
                    </a>
                </div>
            </div>
            <p className="projectDescription">{projectDesc}</p>
            </div>
            
        </div>
    )
}

export default Project
