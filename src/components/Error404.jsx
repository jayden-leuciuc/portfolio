import React from "react"
import { Link } from "gatsby"

function Error404() {
  return (
    <div className="error404-container">
      <h1>404: Not found</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>

      <Link to={"/"} className="link">
        Take me back
      </Link>
    </div>
  )
}

export default Error404
