import React from 'react'
import './About.scss'
import { FaHtml5, FaCss3, FaNodeJs, FaSass, FaReact, FaGitAlt, FaTwitter, FaLinkedin, FaGithub  } from "react-icons/fa";
import {DiMongodb} from "react-icons/di"
function About() {
    return (
        <div id="aboutId">
        <div className="about-container">
            <div className="text-container">
                <h1>About<span>_</span></h1>
                <div className="p-container">
                <p>I'm a self taught developer located in Knoxville, Tennesee, who focuses on front end web development.</p>
                <p>I consider myself to be very self-motivated, as I am always learning, since learning is important in this industry.</p>
                {/*<p>Social: 
                    <div className="social-icons-container">
                    <FaGithub className="social-icon"/>
                <FaLinkedin className="social-icon"/>
                <FaTwitter className="social-icon"/> 
                    </div>
                
                </p> */}
                <p>If you would like to contact me: <span><a href="mailto: leuciucjayden@gmail.com">leuciucjayden@gmail.com</a></span></p>
                <p>Resume: <span><a href="/media/Leuciuc, Jayden Resume.pdf" target="_blank">Leuciuc, Jayden Resume 2020</a></span></p>

                
                </div>
                <h6>This is the technology I like to use:</h6>
                <div class="icons">
                    <div className="hmtlDiv">
                        <FaHtml5 className="iconPic"/>
                        <p className="iconText">Html5</p>
                    </div>
                    <div className="cssDiv">
                        <FaCss3 className="iconPic"/>
                        <p className="iconText">Css3</p>
                    </div>
                    <div className="nodeDiv">
                        <FaNodeJs className="iconPic"/>
                        <p className="iconText">Node.js</p>
                    </div>
                    <div className="sassDiv">
                        <FaSass className="iconPic"/>
                        <p className="iconText">Sass</p>
                    </div>
                    <div className="reactDiv">
                        <FaReact className="iconPic"/>
                        <p className="iconText">React.js</p>
                    </div>
                    <div className="mongoDiv">
                        <DiMongodb className="iconPic"/>
                        <p className="iconText">MongoDB</p>
                    </div>
                    <div className="gitDiv">
                        <FaGitAlt className="iconPic"/>
                        <p className="iconText">Git</p>
                    </div>
                
                

                
                
            </div>
            </div>
            
        </div>
        </div>
    )
}

export default About
