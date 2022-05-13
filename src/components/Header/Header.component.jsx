import { Link } from "gatsby"
import React from "react"
import "./Header.styles.scss"
import scrollTo from "gatsby-plugin-smoothscroll"
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className="link">
              Jayden Leuciuc
            </Link>
          </li>

          <li>
            <Link to="/blog" className="link">
              Blog
            </Link>
          </li>

          <li>
            <a onClick={() => scrollTo("#about")}>About</a>
          </li>
          <li>
            <a onClick={() => scrollTo("#projects")}>Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
