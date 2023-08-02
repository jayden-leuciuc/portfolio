import React from "react"
import SingleProject from "./SingleProject"
import cryptoImage from "../images/cryptominerinfo.png"
import nrgLogo from "../images/nrg-logo.svg"

function Github() {
  return (
    <div className="github-project-container">
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
      />
    </div>
  )
}
export default Github
