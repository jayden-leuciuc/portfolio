import React from "react"
import resume from "../../static/Leuciuc Jayden Resume.pdf"

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
            Hi, i'm Jayden. I am a computer science student at the University of Tennessee, building responsive websites at KUB.
            </p>
            <p>
              If you would like to contact me:
              <span>
                <a href="mailto: leuciucjayden@gmail.com">
                  leuciucjayden@gmail.com
                </a>
              </span>
            </p>
            <p>
              Resume:
              <span>
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  Leuciuc, Jayden Resume 2022
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
