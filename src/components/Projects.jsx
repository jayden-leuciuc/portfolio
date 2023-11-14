import React from "react"
import SingleProject from "./SingleProject"
import cryptoImage from "/cryptominerinfo.svg"
import nrgLogo from "/nrg-logo.svg"
import knoxflowLogo from "/knoxflowLogo.png"

function Github() {
  return (
    <div className="github-project-container">
      <SingleProject
        title="KnoxFlow"
        subHeading="Developer"
        description="Pressure Washing company website."
        tags={["Vite"]}
        imageLink={knoxflowLogo}
        imageAlt="knoxflow logo"
        liveLink="https://knoxflow.com/"
      />
      <SingleProject
        title="CryptoMinerInfo"
        subHeading="Personal Project"
        description="Multi web application providing information about crypto currency mining."
        tags={["React", "Express"]}
        imageLink={cryptoImage}
        imageAlt="crypto miner info"
        liveLink="https://cryptominerinfo.com/"
      />
      <SingleProject
        title="nrg-ui"
        subHeading="Open-source contributor"
        description={`"...an opinionated UI addon based on how KUB scaffolds web applications."`}
        tags={["Ember"]}
        imageLink={nrgLogo}
        imageAlt="nrg-ui"
        liveLink="https://knoxville-utilities-board.github.io/ember-nrg-ui/"
        githubLink="https://github.com/knoxville-utilities-board/ember-nrg-ui"
      />
    </div>
  )
}
export default Github
