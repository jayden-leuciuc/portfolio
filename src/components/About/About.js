import React from "react"
import "./About.scss"
import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaSass,
  FaReact,
  FaGitAlt,
} from "react-icons/fa"
import { DiMongodb, DiJava } from "react-icons/di"
import { GrGraphQl, GrGatsbyjs } from "react-icons/gr"
import { SiSpring } from "react-icons/si"

import resume from "../downloads/Leuciuc Jayden Resume.pdf"

function About() {
  return (
    <div id="about">
      <div className="about-container">
        <div className="text-container">
          <h1>
            About<span>_</span>
          </h1>
          <div className="p-container">
            <p>
              My name is Jayden and I am currently a computer science student at
              the University of Tennessee. However, I started learning by
              building custom projects on my own. My creative outlet is
              developing clean, responsive websites. I mainly focus on front-end
              web development, but I am comfortable with the backend
            </p>
            <br />
            <p></p>
            <br />
            <p>
              If you would like to contact me:{" "}
              <span>
                <a href="mailto: leuciucjayden@gmail.com">
                  leuciucjayden@gmail.com
                </a>
              </span>
            </p>
            <p>
              Resume:{" "}
              <span>
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  Leuciuc, Jayden Resume 2022
                </a>
              </span>
            </p>
          </div>
          <h6>Technologies I use:</h6>
          <div className="icons">
            <div>
              <FaReact className="iconPic" />
              <p className="iconText">React.js</p>
            </div>
            <div>
              <FaNodeJs className="iconPic" />
              <p className="iconText">Node.js</p>
            </div>
            <div>
              <GrGatsbyjs className="iconPic" />
              <p className="iconText">Gatsby.js</p>
            </div>
            <div>
              <DiJava className="iconPic" />
              <p className="iconText">Java</p>
            </div>
            <div>
              <SiSpring className="iconPic" />
              <p className="iconText">Spring Boot</p>
            </div>
            <div>
              <FaHtml5 className="iconPic" />
              <p className="iconText">Html5</p>
            </div>
            <div>
              <FaCss3 className="iconPic" />
              <p className="iconText">Css3</p>
            </div>

            <div>
              <FaSass className="iconPic" />
              <p className="iconText">Sass</p>
            </div>
            <div>
              <DiMongodb className="iconPic" />
              <p className="iconText">MongoDB</p>
            </div>
            <div>
              <GrGraphQl className="iconPic" />
              <p className="iconText">GraphQL</p>
            </div>
            <div>
              <FaGitAlt className="iconPic" />
              <p className="iconText">Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
