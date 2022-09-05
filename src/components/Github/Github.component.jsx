import React from "react"
import "./Github.styles.scss"
import SingleProject from "../SingleProject/SingleProject.component"
import { StaticImage } from "gatsby-plugin-image"

function Github() {
  return (
    <div className="github-project-container">
      <SingleProject
        title="Mining Stats"
        description="A dashboard that provides information about crypto currency mining."
        tags={["React", "Express"]}
        image={
          <StaticImage
          src={"../../images/miningstats.png"}
          alt="alt"
          className="github-project-image"
          placeholder="none"
          />}
          githubLink="https://github.com/jayden-leuciuc/mining-stats"
          liveLink="https://miningstatsjl.herokuapp.com/"
      />

        <SingleProject
        title="Github User Lookup"
        description="A dashboard that displays information about a user in github."
        tags={["React", "Express"]}
        image={
          <StaticImage
          src={"../../images/github-pages-sc.JPG"}
          alt="alt"
          className="github-project-image"
          placeholder="none"
          />}
          githubLink="https://github.com/jayden-leuciuc/github-pages"
          liveLink="https://github-page.netlify.app/"
      />

        <SingleProject
        title="Online Store"
        description="A clothing-themed store."
        tags={["React", "Express", "Firebase"]}
        image={
          <StaticImage
          src={"../../images/onlinestore.PNG"}
          alt="alt"
          className="github-project-image"
          placeholder="none"
          />}
          githubLink="https://github.com/jayden-leuciuc/Online-store"
          liveLink="https://online-store-jaydenl.herokuapp.com/"
      />


    </div>
  )
}
export default Github
