import React from "react";
import resume from "../../static/Leuciuc Jayden Resume.pdf";

function About() {
  return (
    <div className="about-container">
      <h1>
        About<span id='pulse'>_</span>
      </h1>
      <div className="about-text-container">
        <p>
          Hi, i'm Jayden. I am a computer science student at the University of Tennessee, building responsive websites at KUB.
        </p>
        <p>
          If you would like to contact me:
        </p>
        <a href="mailto: leuciucjayden@gmail.com">
          leuciucjayden@gmail.com
        </a>
        <p>Resume:</p>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          Leuciuc, Jayden Resume 2022
        </a>
      </div>
    </div>
  );
}

export default About;
