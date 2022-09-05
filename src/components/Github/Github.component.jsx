import React from "react"
import "./Github.styles.scss"
import SingleProject from "../SingleProject/SingleProject.component"
import { StaticImage } from "gatsby-plugin-image"

function Github() {
  return (
    <div className="github-project-container">
      <SingleProject
        title="Mining Stats"
        description="A crypto dashboard that provides information about crypto currency mining."
        tags={["React", "Express"]}
        image={
          <StaticImage
          src={"../../images/miningstats.png"}
          alt="alt"
          className="github-project-image"
          placeholder="none"
          />}
      />

        <SingleProject
        title="Github User Lookup"
        description="test"
        tags={["React"]}
        image={
          <StaticImage
          src={"../../images/github-pages-sc.JPG"}
          alt="alt"
          className="github-project-image"
          placeholder="none"
          />}
      />

        <SingleProject
        title="Online Store"
        description="test"
        tags={["React"]}
        image={
          <StaticImage
          src={"../../images/onlinestore.PNG"}
          alt="alt"
          className="github-project-image"
          placeholder="none"
          />}
      />


    </div>
  )
}
export default Github
