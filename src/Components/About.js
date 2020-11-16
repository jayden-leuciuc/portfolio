import React from 'react'
import './About.scss'
import { FaHtml5, FaCss3, FaNodeJs, FaSass, FaReact, FaGitAlt  } from "react-icons/fa";
import {DiMongodb} from "react-icons/di"
function About() {
    return (
        <div className="about-container">
            <div className="text-container">
                <h1>About<span>_</span></h1>
                <div className="p-container">
                <p>I'm a self taught developer located in Knoxville, Tennesee. 
                    I focus on front end web development, although I have confidence in my backend.</p>
                <p>If you would like to contact me: <span><a href="mailto: leuciucjayden@gmail.com">leuciucjayden@gmail.com</a></span></p>
                <p>Resume: <span><a href="/public/media/Leuciuc, Jayden Resume.pdf">Leuciuc, Jayden Resume 2020</a></span></p>
                </div>
                <h6>This is the technology I like to use:</h6>
                <div class="icons">
                <FaHtml5 className="icon"/>
                <FaCss3 className="icon"/>
                <FaNodeJs className="icon"/>
                <FaSass className="icon"/>
                <FaReact className="icon"/>
                <DiMongodb className="icon"/>
                <FaGitAlt className="icon"/>
            </div>
            </div>
            
        </div>
    )
}

export default About
