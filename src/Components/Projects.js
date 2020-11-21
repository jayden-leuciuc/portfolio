import React from 'react'
import Card from '../Components/Card'
import {projectOne, projectTwo} from './Data'
import './Projects.scss'

function Projects() {
    return (
       <div className="projects-Header">
           <h1>&lt;Projects /&gt;</h1>
        <div className="projects-container">
            
            <Card {...projectOne}/>
            <Card {...projectTwo}/>
        </div>
    </div>
    )
}

export default Projects
