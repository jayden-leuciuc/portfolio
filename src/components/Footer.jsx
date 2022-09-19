import React from "react"
import {FaLinkedin, FaGithub} from "react-icons/fa"

function Footer() {
  return (
    <div className="footer-container">
      <div className="text-container">
        <p>
          Site Created and Built by Jayden Leuciuc{" "}
          <span className="visible"> | </span>
        </p>
        
      </div>
      <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/jayden-leuciuc/"
            className="icon"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/jayden-leuciuc" className="icon">
            <FaGithub />
          </a>
        </div>
    </div>
  )
}

export default Footer
